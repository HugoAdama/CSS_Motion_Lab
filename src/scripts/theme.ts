// theme.ts — Gestión de temas Claro / Oscuro con View Transitions API a 60–120 FPS
import { showToast } from './toast';

export function initTheme(): void {
  const themeToggleBtn = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');

  // Detectar preferencia guardada o del sistema
  const savedTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', (event: MouseEvent) => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      // 1. Respetar accesibilidad de movimiento reducido
      const prefersReducedMotion =
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        document.documentElement.classList.contains('reduce-motion-forced');

      // 2. Transición circular fluida con View Transitions API a 60–120 FPS
      const hasViewTransition =
        !prefersReducedMotion &&
        typeof document !== 'undefined' &&
        'startViewTransition' in document;

      if (hasViewTransition) {
        // Coordenadas del clic o posición del botón para el origen de la onda
        const rect = themeToggleBtn.getBoundingClientRect();
        const x = event.clientX || rect.left + rect.width / 2;
        const y = event.clientY || rect.top + rect.height / 2;

        const endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        );

        const transition = (document as any).startViewTransition(async () => {
          document.documentElement.setAttribute('data-theme', newTheme);
          localStorage.setItem('theme', newTheme);
        });

        transition.ready.then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 380,
              easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
              pseudoElement: '::view-transition-new(root)',
            }
          );
        });
      } else if (!prefersReducedMotion) {
        // Fallback suave con clase temporal acelerada por GPU
        document.documentElement.classList.add('theme-transitioning');
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setTimeout(() => {
          document.documentElement.classList.remove('theme-transitioning');
        }, 260);
      } else {
        // Cambio instantáneo para movimiento reducido
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      }

      showToast(`Tema cambiado a ${newTheme === 'dark' ? 'oscuro' : 'claro'}`);
    });
  }
}
