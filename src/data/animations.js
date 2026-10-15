// Catálogo principal unificado de animaciones y patrones UI
// 30 animaciones por categoría (Total: 180 animaciones)

import { patternsAnimations } from './categories/patterns.js';
import { entrancesAnimations } from './categories/entrances.js';
import { emphasisAnimations } from './categories/emphasis.js';
import { loadingAnimations } from './categories/loading.js';
import { textAnimations } from './categories/text.js';
import { interactionAnimations } from './categories/interaction.js';

export const categories = [
  'Todas',
  'Patrones UI',
  'Entrada',
  'Énfasis',
  'Carga',
  'Texto',
  'Interacción'
];

export const animations = [
  ...patternsAnimations,
  ...entrancesAnimations,
  ...emphasisAnimations,
  ...loadingAnimations,
  ...textAnimations,
  ...interactionAnimations
];
