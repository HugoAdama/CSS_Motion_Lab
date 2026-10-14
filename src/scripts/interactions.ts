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

    // 6. Alternar vista de panel de código
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

    // 7. Pestañas CSS / HTML / Completo
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

    // 8. Botón copiar dentro de la pestaña activa del panel de código
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
}
