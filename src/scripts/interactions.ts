// interactions.ts — Delegación de eventos interactivos (copiado, pestañas, demos UI y repetición)
import { replayCard } from './motion';
import { showToast } from './toast';

export function initInteractions(): void {
  document.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    // 1. Botón reproducir individual
    const replayButton = target.closest<HTMLButtonElement>('[data-replay]');
    if (replayButton) {
      const card = replayButton.closest<HTMLElement>('[data-animation-card]');
      const icon = replayButton.querySelector<HTMLElement>('.replay-icon');
      if (icon) {
        icon.classList.add('is-spinning');
        window.setTimeout(() => icon.classList.remove('is-spinning'), 600);
      }
      if (card) replayCard(card);
      return;
    }

    // 2. Interacción del Acordeón en la vista previa
    const accordionTrigger = target.closest<HTMLElement>('.accordion-trigger, [data-toggle-accordion-demo]');
    if (accordionTrigger) {
      const card = accordionTrigger.closest<HTMLElement>('[data-animation-card]');
      const accordion = card?.querySelector<HTMLElement>('[data-accordion-widget]');
      if (accordion) {
        const isOpen = accordion.classList.contains('is-open');
        accordion.classList.toggle('is-open', !isOpen);
        const trigger = accordion.querySelector<HTMLElement>('.accordion-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', String(!isOpen));
      }
      return;
    }

    // 3. Interacción de giro de la tarjeta 3D Flip
    const flipTrigger = target.closest<HTMLElement>('.flip-wrapper, [data-toggle-flip-demo]');
    if (flipTrigger) {
      const card = flipTrigger.closest<HTMLElement>('[data-animation-card]');
      const flipWidget = card?.querySelector<HTMLElement>('[data-flip-card-widget]');
      if (flipWidget) {
        flipWidget.classList.toggle('is-flipped');
      }
      return;
    }

    // 4. Cierre interactivo del Toast Lifecycle
    const toastClose = target.closest<HTMLButtonElement>('.toast-close-btn');
    if (toastClose) {
      const banner = toastClose.closest<HTMLElement>('.toast-banner');
      if (banner) {
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(-18px) scale(0.96)';
      }
      return;
    }

    // 5. Botón directo "Copiar ejemplo completo" (HTML + CSS)
    const copyFullBtn = target.closest<HTMLButtonElement>('[data-copy-full]');
    if (copyFullBtn) {
      const card = copyFullBtn.closest<HTMLElement>('[data-animation-card]');
      const fullCodeEl = card?.querySelector<HTMLElement>('[data-code-full]');
      const label = copyFullBtn.querySelector<HTMLElement>('[data-copy-full-text]');
      if (fullCodeEl?.textContent) {
        try {
          await navigator.clipboard.writeText(fullCodeEl.textContent);
          if (label) label.textContent = '¡Ejemplo copiado!';
          copyFullBtn.classList.add('is-copied');
          showToast('¡HTML y CSS coordinados copiados al portapapeles!');
        } catch {
          if (label) label.textContent = 'Error al copiar';
        }
        window.setTimeout(() => {
          if (label) label.textContent = 'Copiar ejemplo completo';
          copyFullBtn.classList.remove('is-copied');
        }, 1800);
      }
      return;
    }

    // 5b. Botón "Abrir en CodePen" (1 Clic)
    const codepenBtn = target.closest<HTMLButtonElement>('[data-open-codepen]');
    if (codepenBtn) {
      const card = codepenBtn.closest<HTMLElement>('[data-animation-card]');
      if (card) {
        const title = card.querySelector('h3')?.textContent || 'CSS Motion Animation';
        const codeCss = card.querySelector<HTMLElement>('[data-code-css]')?.textContent || '';
        const codeHtml = card.querySelector<HTMLElement>('[data-code-html]')?.textContent || '';
        const category = card.dataset.category || 'Animación';

        const data = {
          title: `CSS Motion Lab — ${title}`,
          description: `Ejemplo de animación CSS coordinada para "${title}" (${category}).`,
          html: codeHtml,
          css: codeCss,
          editors: '110',
          tags: ['css', 'motion', 'animation', 'css-motion-lab']
        };

        const form = document.createElement('form');
        form.action = 'https://codepen.io/pen/define';
        form.method = 'POST';
        form.target = '_blank';

        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'data';
        input.value = JSON.stringify(data);

        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
        form.remove();

        showToast(`¡Abriendo "${title}" en CodePen!`);
      }
      return;
    }

    // 6. Alternar cuadrícula técnica en el escenario de la tarjeta
    const gridBtn = target.closest<HTMLButtonElement>('[data-stage-grid-btn]');
    if (gridBtn) {
      const card = gridBtn.closest<HTMLElement>('[data-animation-card]');
      const stage = card?.querySelector<HTMLElement>('[data-demo-stage]');
      if (stage) {
        const isPlain = stage.classList.toggle('stage--plain');
        gridBtn.classList.toggle('is-plain', isPlain);
        showToast(isPlain ? 'Cuadrícula desactivada' : 'Cuadrícula técnica activada');
      }
      return;
    }

    // 7. Alternar calibrador individual en modo compacto
    const tunerToggleBtn = target.closest<HTMLButtonElement>('[data-toggle-tuner-card]');
    if (tunerToggleBtn) {
      const card = tunerToggleBtn.closest<HTMLElement>('[data-animation-card]');
      const tuner = card?.querySelector<HTMLElement>('[data-card-tuner]');
      if (tuner) {
        tuner.classList.toggle('is-manually-open');
      }
      return;
    }

    // 8. Selector de modo de vista (Estudio vs Compacto)
    const viewModeBtn = target.closest<HTMLButtonElement>('[data-view-mode]');
    if (viewModeBtn) {
      const mode = viewModeBtn.dataset.viewMode;
      const grid = document.querySelector<HTMLElement>('[data-animation-grid]');
      if (grid && mode) {
        document.querySelectorAll<HTMLButtonElement>('[data-view-mode]').forEach((btn) => {
          const isActive = btn === viewModeBtn;
          btn.classList.toggle('is-active', isActive);
          btn.setAttribute('aria-pressed', String(isActive));
        });
        grid.classList.toggle('is-compact', mode === 'compact');
        try {
          localStorage.setItem('css_motion_view_mode', mode);
        } catch {}
        showToast(mode === 'compact' ? 'Modo Compacto activado' : 'Modo Estudio (completo) activado');
      }
      return;
    }

    // 9. Alternar vista de panel de código
    const toggleButton = target.closest<HTMLButtonElement>('[data-toggle-code]');
    if (toggleButton) {
      const card = toggleButton.closest<HTMLElement>('[data-animation-card]');
      const panel = card?.querySelector<HTMLElement>('[data-code-panel]');
      if (panel) {
        const isHidden = panel.hidden;
        panel.hidden = !isHidden;
        toggleButton.setAttribute('aria-expanded', String(isHidden));
        toggleButton.classList.toggle('is-open', isHidden);
        const chevron = toggleButton.querySelector<HTMLElement>('.chevron-icon');
        if (chevron) chevron.textContent = isHidden ? '⌃' : '⌄';
      }
      return;
    }

    // 10. Pestañas CSS / HTML / Completo
    const tabBtn = target.closest<HTMLButtonElement>('[data-tab]');
    if (tabBtn) {
      const panel = tabBtn.closest<HTMLElement>('[data-code-panel]');
      const tab = tabBtn.dataset.tab;
      if (panel) {
        panel.querySelectorAll<HTMLButtonElement>('[data-tab]').forEach((b) => {
          b.classList.toggle('is-active', b === tabBtn);
          b.setAttribute('aria-selected', String(b === tabBtn));
        });
        panel.querySelectorAll<HTMLElement>('[data-code-view]').forEach((view) => {
          view.hidden = view.dataset.codeView !== tab;
        });
      }
      return;
    }

    // 11. Botón copiar dentro de la pestaña activa del panel de código
    const copyButton = target.closest<HTMLButtonElement>('[data-copy]');
    if (copyButton) {
      const panel = copyButton.closest<HTMLElement>('[data-code-panel]');
      const activeView = panel?.querySelector<HTMLElement>('[data-code-view]:not([hidden])');
      const codeEl = activeView?.querySelector('code');
      const status = panel?.querySelector<HTMLElement>('[data-copy-status]');
      const copyLabel = copyButton.querySelector<HTMLElement>('[data-copy-text]');

      if (codeEl?.textContent) {
        const textToCopy = codeEl.textContent;
        try {
          await navigator.clipboard.writeText(textToCopy);
          if (copyLabel) copyLabel.textContent = '¡Copiado!';
          copyButton.classList.add('is-copied');
          if (status) status.textContent = 'Código copiado al portapapeles.';
          showToast('Código copiado al portapapeles');
        } catch {
          if (copyLabel) copyLabel.textContent = 'Error';
          if (status) status.textContent = 'No se pudo copiar automáticamente.';
        }

        window.setTimeout(() => {
          if (copyLabel) copyLabel.textContent = 'Copiar';
          copyButton.classList.remove('is-copied');
          if (status) status.textContent = '';
        }, 1800);
      }
      return;
    }
  });

  // Efecto spotlight en hover sobre las tarjetas
  document.addEventListener('mousemove', (event) => {
    const target = event.target as HTMLElement | null;
    const card = target?.closest<HTMLElement>('[data-animation-card]');
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  });

  // Atajos de teclado globales para desarrolladores
  window.addEventListener('keydown', (event) => {
    const activeTag = (document.activeElement?.tagName || '').toLowerCase();
    if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
      if (event.key === 'Escape') {
        (document.activeElement as HTMLElement)?.blur();
      }
      return;
    }

    if (event.key === 'r' || event.key === 'R') {
      event.preventDefault();
      const replayAllBtn = document.querySelector<HTMLButtonElement>('[data-replay-all]');
      replayAllBtn?.click();
    } else if (event.key === 'm' || event.key === 'M') {
      event.preventDefault();
      const motionBtn = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
      motionBtn?.click();
    } else if (event.key === 'Escape') {
      // Cerrar paneles de código abiertos y limpiar búsqueda
      document.querySelectorAll<HTMLElement>('[data-code-panel]:not([hidden])').forEach((p) => {
        p.hidden = true;
      });
      document.querySelectorAll<HTMLButtonElement>('[data-toggle-code].is-open').forEach((b) => {
        b.classList.remove('is-open');
      });
      const searchInput = document.querySelector<HTMLInputElement>('[data-search]');
      if (searchInput && searchInput.value) {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
      }
    } else if (event.key === 'ArrowLeft') {
      const prevBtn = document.querySelector<HTMLButtonElement>('[data-page-prev]:not(:disabled)');
      prevBtn?.click();
    } else if (event.key === 'ArrowRight') {
      const nextBtn = document.querySelector<HTMLButtonElement>('[data-page-next]:not(:disabled)');
      nextBtn?.click();
    }
  });

  // Restaurar modo de vista guardado
  try {
    const savedMode = localStorage.getItem('css_motion_view_mode');
    if (savedMode === 'compact') {
      const compactBtn = document.querySelector<HTMLButtonElement>('[data-view-mode="compact"]');
      if (compactBtn) {
        compactBtn.click();
      }
    }
  } catch {}
}
