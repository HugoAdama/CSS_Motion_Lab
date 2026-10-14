// main.ts — Punto de entrada de scripts del cliente en CSS Motion Lab
import { animations } from '../data/animations.js';
import { initTheme } from './theme';
import { initMotionControls } from './motion';
import { initCardTuning } from './tuner';
import { initFilters } from './filters';
import { initInteractions } from './interactions';

function initApp(): void {
  const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-animation-card]'));
  const animMap = new Map(animations.map((a: any) => [a.id, a]));

  initTheme();
  initMotionControls(cards);
  initCardTuning(cards, animMap);
  initFilters(cards);
  initInteractions();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
