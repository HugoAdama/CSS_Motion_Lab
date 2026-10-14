// toast.ts — Notificación global de feedback para copiado y cambios de estado

let toastTimeout: number | undefined;

export function showToast(message: string): void {
  const globalToast = document.querySelector<HTMLElement>('[data-global-toast]');
  const toastMsg = document.querySelector<HTMLElement>('[data-toast-msg]');

  if (!globalToast || !toastMsg) return;

  toastMsg.textContent = message;
  globalToast.hidden = false;
  globalToast.classList.add('is-visible');

  clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    globalToast.classList.remove('is-visible');
    window.setTimeout(() => {
      globalToast.hidden = true;
    }, 300);
  }, 2200);
}
