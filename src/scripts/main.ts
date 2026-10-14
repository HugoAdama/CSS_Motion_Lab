// main.ts — Punto de entrada de scripts del cliente en CSS Motion Lab
import { animations } from '../data/animations.js';
import type { AnimationDefinition } from '../types';
import { initTheme } from './theme';
import { initMotionControls } from './motion';
import { initCardTuning } from './tuner';
import { initFilters } from './filters';
import { initInteractions } from './interactions';
import { initBundleBuilder } from './bundle';

function initApp(): void {
  const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-animation-card]'));
  const animMap = new Map<string, AnimationDefinition>(
    animations.map((a: any) => [a.id, a as AnimationDefinition])
  );

  initTheme();
  initMotionControls(cards);
  initCardTuning(cards, animMap);
  initFilters(cards);
  initInteractions();
  initBundleBuilder(cards, animMap);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
