// src/types/motion.ts — Definiciones de tipos estrictos del ecosistema CSS Motion Lab

/**
 * Categorías oficiales disponibles en el catálogo
 */
export type CategoryType =
  | 'Todas'
  | 'Patrones UI'
  | 'Entrada'
  | 'Énfasis'
  | 'Carga'
  | 'Texto'
  | 'Interacción';

/**
 * Tipos de impacto en el pipeline de renderizado del navegador
 */
export type RenderCostType = 'composite' | 'paint' | 'layout';

/**
 * Opciones estándar de curvas de aceleración (timing functions)
 */
export type TimingCurve =
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'linear'
  | string;

/**
 * Coordenadas normalizadas de una curva Bézier cúbica
 */
export interface BezierCoordinates {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

/**
 * Coordenadas proyectadas en el lienzo SVG del visualizador
 */
export interface BezierSvgPlot {
  pathD: string;
  tangentD: string;
  cp1: { x: number; y: number };
  cp2: { x: number; y: number };
}

/**
 * Definición completa de una animación o patrón en el catálogo
 */
export interface AnimationDefinition {
  /** Identificador único en formato kebab-case */
  id: string;
  /** Nombre comercial o descriptivo del efecto */
  name: string;
  /** Categoría temática a la que pertenece */
  category: CategoryType | string;
  /** Etiqueta legible del costo de renderizado (ej: "Bajo (GPU / Composición)") */
  renderCost: string;
  /** Clasificación técnica del costo para el filtro de pipeline */
  renderCostType: RenderCostType;
  /** Explicación detallada de por qué tiene ese impacto en el motor de render */
  costExplanation: string;
  /** Propiedades CSS animadas (ej: "transform, opacity") */
  properties: string;
  /** Selector CSS objetivo dentro del ejemplo */
  targetSelector: string;
  /** Duración por defecto en segundos */
  defaultDuration: number;
  /** Curva de aceleración inicial */
  defaultTiming: TimingCurve;
  /** Lista de opciones de timing disponibles en el tuner */
  timingOptions: string[];
  /** Clase CSS contenedora para el escenario de prueba */
  previewClass: string;
  /** Marcado HTML que se renderiza dentro de la tarjeta */
  previewHtml: string;
  /** Fragmento HTML reproducible independiente para copiar o exportar */
  htmlSnippet: string;
  /** Si la animación soporta control de escalonamiento (stagger) */
  hasStaggerControl?: boolean;
  /** Retraso por defecto entre elementos en segundos */
  defaultStaggerDelay?: number;
  /** Función generadora de CSS dinámico calibrado */
  generateCss: (duration: number, timing: string, staggerDelay?: number) => string;
}

/**
 * Estado reactivo de los filtros del catálogo
 */
export interface FilterState {
  category: string;
  costType: 'all' | RenderCostType;
  searchQuery: string;
  currentPage: number;
  pageSize: number;
}

/**
 * Elemento seleccionado dentro del creador de paquetes personalizados
 */
export interface BundleItem {
  id: string;
  name: string;
  css: string;
}

/**
 * Eventos del bus de eventos tipado para desacoplamiento
 */
export interface MotionLabEvents {
  'filter:change': FilterState;
  'bundle:change': { count: number; ids: string[] };
  'tuner:change': { id: string; duration: number; timing: string; stagger?: number };
  'motion:replay-all': void;
  'motion:speed-change': { speed: number };
  'toast:show': { message: string; duration?: number };
}
