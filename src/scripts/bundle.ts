// bundle.ts — Gestor del creador y exportador de paquete CSS personalizado (Custom Bundle Builder)
import { showToast } from './toast';
import { eventBus } from './events';
import type { AnimationDefinition } from '../types';

const selectedAnimIds = new Set<string>();

export function getSelectedAnimationIds(): string[] {
  return Array.from(selectedAnimIds);
}

export function initBundleBuilder(cards: HTMLElement[], animMap: Map<string, AnimationDefinition>): void {
  const dock = document.querySelector<HTMLElement>('[data-bundle-dock]');
  const countEl = document.querySelector<HTMLElement>('[data-bundle-count]');
  const downloadBtn = document.querySelector<HTMLButtonElement>('[data-bundle-download]');
  const copyBtn = document.querySelector<HTMLButtonElement>('[data-bundle-copy]');
  const clearBtn = document.querySelector<HTMLButtonElement>('[data-bundle-clear]');

  function updateDockUI(): void {
    const count = selectedAnimIds.size;
    if (countEl) countEl.textContent = String(count);

    if (dock) {
      if (count > 0) {
        dock.hidden = false;
        dock.classList.add('is-visible');
      } else {
        dock.classList.remove('is-visible');
        window.setTimeout(() => {
          if (selectedAnimIds.size === 0 && dock) dock.hidden = true;
        }, 250);
      }
    }

    // Actualizar botones de cada tarjeta
    cards.forEach((card) => {
      const id = card.dataset.id;
      if (!id) return;
      const isSelected = selectedAnimIds.has(id);
      const btn = card.querySelector<HTMLButtonElement>('[data-bundle-toggle]');
      if (btn) {
        btn.classList.toggle('is-collected', isSelected);
        btn.setAttribute('aria-pressed', String(isSelected));
        const icon = btn.querySelector('.bundle-check-icon');
        const text = btn.querySelector('.bundle-btn-text');
        if (icon) icon.textContent = isSelected ? '✓' : '+';
        if (text) text.textContent = isSelected ? 'En paquete' : 'Colección';
      }
    });

    eventBus.emit('bundle:change', { count, ids: Array.from(selectedAnimIds) });
  }

  function generateUnifiedBundleCss(): string {
    const header = `/* =========================================================================
   CSS MOTION LAB — PAQUETE PERSONALIZADO (CUSTOM BUNDLE)
   Generado: ${new Date().toLocaleDateString()}
   Total de animaciones seleccionadas: ${selectedAnimIds.size}
   ========================================================================= */\n\n`;

    const cssBlocks: string[] = [];

    selectedAnimIds.forEach((id) => {
      const card = cards.find((c) => c.dataset.id === id);
      const codeCss = card?.querySelector<HTMLElement>('[data-code-css]')?.textContent;
      const animName = card?.querySelector('h3')?.textContent || id;

      if (codeCss) {
        cssBlocks.push(`/* --- ${animName} --- */\n${codeCss.trim()}`);
      } else {
        const anim = animMap.get(id);
        if (anim && anim.generateCss) {
          cssBlocks.push(`/* --- ${anim.name} --- */\n${anim.generateCss(anim.defaultDuration, anim.defaultTiming, 0.1).trim()}`);
        }
      }
    });

    return header + cssBlocks.join('\n\n') + '\n';
  }

  // Delegación de click en tarjeta para añadir/quitar del paquete
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    const toggleBtn = target.closest<HTMLButtonElement>('[data-bundle-toggle]');
    if (toggleBtn) {
      const card = toggleBtn.closest<HTMLElement>('[data-animation-card]');
      const id = card?.dataset.id;
      const name = card?.querySelector('h3')?.textContent || 'Animación';
      if (!id) return;

      if (selectedAnimIds.has(id)) {
        selectedAnimIds.delete(id);
        showToast(`Removido "${name}" del paquete`);
      } else {
        selectedAnimIds.add(id);
        showToast(`¡Añadido "${name}" a tu paquete! (${selectedAnimIds.size})`);
      }
      updateDockUI();
    }
  });

  // Copiar bundle
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      if (selectedAnimIds.size === 0) return;
      const css = generateUnifiedBundleCss();
      try {
        await navigator.clipboard.writeText(css);
        showToast(`¡Paquete con ${selectedAnimIds.size} animaciones copiado!`);
      } catch {
        showToast('Error al copiar el paquete');
      }
    });
  }

  // Descargar archivo .css
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (selectedAnimIds.size === 0) return;
      const css = generateUnifiedBundleCss();
      const blob = new Blob([css], { type: 'text/css;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `motion-bundle-${selectedAnimIds.size}-items.css`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showToast(`Descargando motion-bundle.css (${selectedAnimIds.size} animaciones)`);
    });
  }

  // Limpiar selección
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      selectedAnimIds.clear();
      updateDockUI();
      showToast('Selección de paquete vaciada');
    });
  }
}
