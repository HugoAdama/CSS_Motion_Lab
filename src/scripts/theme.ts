// theme.ts — Gestión de temas Claro / Oscuro con persistencia en localStorage
import { showToast } from './toast';

export function initTheme(): void {
  const themeToggleBtn = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');

  // Detectar preferencia guardada o del sistema
  const savedTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      showToast(`Tema cambiado a ${newTheme === 'dark' ? 'oscuro' : 'claro'}`);
    });
  }
}
