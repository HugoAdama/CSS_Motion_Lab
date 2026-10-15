// i18n.ts — Gestor de Internacionalización y soporte bilingüe en vivo (ES / EN)
import { showToast } from './toast';
import { eventBus } from './events';

export type Language = 'es' | 'en';

export const translations = {
  es: {
    // Topbar / Header
    'header.shortcuts': 'Atajos',
    'header.shortcuts_title': 'Atajos de teclado (tecla ?)',
    'header.motion': 'Movimiento',
    'header.motion_title': 'Alternar modo de movimiento reducido',
    'header.theme_title': 'Alternar tema claro y oscuro',
    'header.lang_label': 'ES',
    'header.lang_title': 'Cambiar idioma / Switch language (ES / EN)',

    // Hero
    'hero.eyebrow': 'CATÁLOGO TÉCNICO · CSS NATIVO',
    'hero.title_pre': 'Haz visible el',
    'hero.title_highlight': 'movimiento.',
    'hero.description': 'Explora efectos atómicos y patrones compuestos de interfaz (staggered lists, toasts, skeletons y acordeones) con selectores coordinados en HTML y CSS. Calibra parámetros en vivo y copia ejemplos completos listos para producción.',
    'hero.explore_btn': 'Explorar catálogo',
    'hero.replay_all_btn': 'Reproducir todas',
    'hero.stat_total': 'Ejemplos totales',
    'hero.stat_patterns': 'Patrones UI',
    'hero.stat_atomic': 'Efectos atómicos',
    'hero.stat_coordinated': 'Coordinados',

    // Filter Bar & Gallery Header
    'gallery.badge': 'CATÁLOGO INTERACTIVO',
    'gallery.title': 'Galería de Efectos y Patrones UI',
    'gallery.subtitle': 'Calibra duración, curvas Bézier y retrasos escalonados. Inspecciona el impacto en la composición del navegador, ábrelas en CodePen y exporta paquetes personalizados.',
    'gallery.mode_studio': 'Estudio',
    'gallery.mode_compact': 'Compacto',
    'gallery.speed_label': 'Velocidad de reproducción',
    'gallery.replay_btn': 'Reproducir',
    'gallery.search_placeholder': 'Buscar por nombre o propiedad (ej. fade, transform, blur)...',
    'gallery.showing': 'Mostrando',
    'gallery.of': 'de',
    'gallery.page': 'Pág.',

    // Categories
    'category.all': 'Todas',
    'category.patterns': 'Patrones UI',
    'category.entrances': 'Entrada',
    'category.emphasis': 'Énfasis',
    'category.loading': 'Carga',
    'category.text': 'Texto',
    'category.interaction': 'Interacción',
    'category.favorites': 'Favoritos',

    // Pipeline filter
    'pipeline.label': 'Pipeline de Renderizado:',
    'pipeline.all': 'Todos los costos',
    'pipeline.gpu': 'Solo GPU (Composición)',
    'pipeline.paint': 'Repintado (Paint)',
    'pipeline.layout': 'Maquetación (Layout)',

    // Card Actions & Tuner
    'card.play': 'Reproducir',
    'card.pause': 'Pausar',
    'card.resume': 'Reanudar',
    'card.calibrate': 'Calibrar',
    'card.code': 'Código',
    'card.favorite': 'Favorito',
    'card.copy': 'Copiar',
    'card.copied': '¡Copiado!',
    'card.codepen': 'CodePen',
    'card.bundle_add': 'Colección',
    'card.bundle_in': 'En paquete',
    'card.stage_grid': 'Alternar cuadrícula',
    'card.test_accordion': 'Probar apertura',
    'card.test_flip': 'Girar 3D',
    'card.properties_label': 'Propiedades:',
    'card.calibrate_params': 'Calibrar parámetros:',
    'card.reset_params': 'Restablecer',
    'card.duration_label': 'Duración:',
    'card.curve_label': 'Curva (timing):',
    'card.bezier_curve': 'Curva Bézier:',
    'card.ref_linear': 'ref. lineal',
    'card.stagger_label': 'Retraso escalonado (delay):',
    'card.tab_css': 'CSS',
    'card.tab_html': 'HTML',
    'card.tab_full': 'Completo',
    'card.tab_tailwind': 'Tailwind',

    // Pagination
    'pagination.showing': 'Mostrando',
    'pagination.page': 'Página',
    'pagination.of': 'de',
    'pagination.animations': 'animaciones',
    'pagination.per_page': 'Por página:',
    'pagination.all_pages': 'Todas',
    'pagination.prev': 'Anterior',
    'pagination.next': 'Siguiente',

    // Empty State
    'empty.title': 'No se encontraron animaciones',
    'empty.description': 'No hay resultados que coincidan con tus criterios de búsqueda o filtro.',
    'empty.reset_btn': 'Restablecer filtros',

    // Custom Bundle Dock
    'bundle.title': 'Mi Selección de Animaciones',
    'bundle.subtitle': 'Genera un archivo CSS único con tus animaciones',
    'bundle.download': 'Descargar .CSS',
    'bundle.copy': 'Copiar Todo',
    'bundle.clear': 'Limpiar',

    // Shortcuts Dialog
    'shortcuts.title': 'Atajos de Teclado del Laboratorio',
    'shortcuts.r': 'Reproducir todas las animaciones visibles',
    'shortcuts.m': 'Alternar modo de movimiento reducido (accesibilidad)',
    'shortcuts.slash': 'Enfocar el buscador en tiempo real',
    'shortcuts.arrows': 'Navegar a la página anterior o siguiente',
    'shortcuts.question': 'Abrir / cerrar esta guía de atajos rápidos',
    'shortcuts.esc': 'Cerrar paneles de código, modales o limpiar búsqueda',

    // Back to top
    'back_to_top': 'Volver al inicio de la galería',

    // Footer
    'footer.description': 'Laboratorio interactivo para experimentar, calibrar y reutilizar animaciones CSS nativas y patrones de UI listos para producción.',
    'footer.dev_design': 'Desarrollo y Diseño:',
    'footer.made_by': 'Realizado por',
    'footer.repo_btn': 'Repositorio en GitHub',
    'footer.top_link': 'Volver arriba ↑',
    'footer.catalog_link': 'Catálogo',

    // Toast messages
    'toast.lang_switched': 'Idioma cambiado a Español',
    'toast.motion_reduced': 'Modo de movimiento reducido activado',
    'toast.motion_restored': 'Modo de movimiento completo restaurado',
    'toast.filters_reset': 'Filtros restablecidos',
    'toast.fav_added': '¡Añadida a favoritos!',
    'toast.fav_removed': 'Removida de favoritos',
    'toast.bundle_added': '¡Añadida a tu paquete!',
    'toast.bundle_removed': 'Removida del paquete',
    'toast.bundle_cleared': 'Selección de paquete vaciada',
    'toast.bundle_copied': '¡Paquete copiado al portapapeles!',
    'toast.css_copied': 'Código copiado al portapapeles',
    'toast.params_reset': 'Parámetros restablecidos',
  },
  en: {
    // Topbar / Header
    'header.shortcuts': 'Shortcuts',
    'header.shortcuts_title': 'Keyboard shortcuts (? key)',
    'header.motion': 'Motion',
    'header.motion_title': 'Toggle reduced motion mode',
    'header.theme_title': 'Toggle light/dark theme',
    'header.lang_label': 'EN',
    'header.lang_title': 'Switch language / Cambiar idioma (EN / ES)',

    // Hero
    'hero.eyebrow': 'TECHNICAL CATALOG · NATIVE CSS',
    'hero.title_pre': 'Make motion',
    'hero.title_highlight': 'visible.',
    'hero.description': 'Explore atomic effects and composite UI patterns (staggered lists, toasts, skeletons, and accordions) with coordinated HTML and CSS selectors. Calibrate live parameters and copy production-ready examples.',
    'hero.explore_btn': 'Explore catalog',
    'hero.replay_all_btn': 'Replay all',
    'hero.stat_total': 'Total examples',
    'hero.stat_patterns': 'UI Patterns',
    'hero.stat_atomic': 'Atomic effects',
    'hero.stat_coordinated': 'Coordinated',

    // Filter Bar & Gallery Header
    'gallery.badge': 'INTERACTIVE CATALOG',
    'gallery.title': 'UI Patterns and Effects Gallery',
    'gallery.subtitle': 'Calibrate duration, Bézier curves, and staggered delays. Inspect browser compositing impact, open in CodePen, and export custom bundles.',
    'gallery.mode_studio': 'Studio',
    'gallery.mode_compact': 'Compact',
    'gallery.speed_label': 'Playback speed',
    'gallery.replay_btn': 'Play',
    'gallery.search_placeholder': 'Search by name or property (e.g. fade, transform, blur)...',
    'gallery.showing': 'Showing',
    'gallery.of': 'of',
    'gallery.page': 'Page',

    // Categories
    'category.all': 'All',
    'category.patterns': 'UI Patterns',
    'category.entrances': 'Entrances',
    'category.emphasis': 'Emphasis',
    'category.loading': 'Loading',
    'category.text': 'Text',
    'category.interaction': 'Interaction',
    'category.favorites': 'Favorites',

    // Pipeline filter
    'pipeline.label': 'Rendering Pipeline:',
    'pipeline.all': 'All costs',
    'pipeline.gpu': 'GPU Only (Composite)',
    'pipeline.paint': 'Repaint (Paint)',
    'pipeline.layout': 'Reflow (Layout)',

    // Card Actions & Tuner
    'card.play': 'Play',
    'card.pause': 'Pause',
    'card.resume': 'Resume',
    'card.calibrate': 'Calibrate',
    'card.code': 'Code',
    'card.favorite': 'Favorite',
    'card.copy': 'Copy',
    'card.copied': 'Copied!',
    'card.codepen': 'CodePen',
    'card.bundle_add': 'Collect',
    'card.bundle_in': 'In bundle',
    'card.stage_grid': 'Toggle background grid',
    'card.test_accordion': 'Test accordion',
    'card.test_flip': 'Flip 3D',
    'card.properties_label': 'Properties:',
    'card.calibrate_params': 'Calibrate parameters:',
    'card.reset_params': 'Reset',
    'card.duration_label': 'Duration:',
    'card.curve_label': 'Curve (timing):',
    'card.bezier_curve': 'Bézier Curve:',
    'card.ref_linear': 'ref. linear',
    'card.stagger_label': 'Staggered delay:',
    'card.tab_css': 'CSS',
    'card.tab_html': 'HTML',
    'card.tab_full': 'Full',
    'card.tab_tailwind': 'Tailwind',

    // Pagination
    'pagination.showing': 'Showing',
    'pagination.page': 'Page',
    'pagination.of': 'of',
    'pagination.animations': 'animations',
    'pagination.per_page': 'Per page:',
    'pagination.all_pages': 'All',
    'pagination.prev': 'Previous',
    'pagination.next': 'Next',

    // Empty State
    'empty.title': 'No animations found',
    'empty.description': 'No results match your search or filter criteria.',
    'empty.reset_btn': 'Reset filters',

    // Custom Bundle Dock
    'bundle.title': 'My Animation Selection',
    'bundle.subtitle': 'Generate a single CSS file with your animations',
    'bundle.download': 'Download .CSS',
    'bundle.copy': 'Copy All',
    'bundle.clear': 'Clear',

    // Shortcuts Dialog
    'shortcuts.title': 'Laboratory Keyboard Shortcuts',
    'shortcuts.r': 'Replay all visible animations',
    'shortcuts.m': 'Toggle reduced motion mode (accessibility)',
    'shortcuts.slash': 'Focus real-time search input',
    'shortcuts.arrows': 'Navigate to previous or next page',
    'shortcuts.question': 'Open / close this quick shortcuts guide',
    'shortcuts.esc': 'Close code panels, modals, or clear search',

    // Back to top
    'back_to_top': 'Back to top of gallery',

    // Footer
    'footer.description': 'Interactive laboratory to experiment, calibrate, and reuse production-ready native CSS animations and UI patterns.',
    'footer.dev_design': 'Development & Design:',
    'footer.made_by': 'Made by',
    'footer.repo_btn': 'GitHub Repository',
    'footer.top_link': 'Back to top ↑',
    'footer.catalog_link': 'Catalog',

    // Toast messages
    'toast.lang_switched': 'Language switched to English',
    'toast.motion_reduced': 'Reduced motion mode enabled',
    'toast.motion_restored': 'Full motion mode restored',
    'toast.filters_reset': 'Filters reset',
    'toast.fav_added': 'Added to favorites!',
    'toast.fav_removed': 'Removed from favorites',
    'toast.bundle_added': 'Added to your bundle!',
    'toast.bundle_removed': 'Removed from bundle',
    'toast.bundle_cleared': 'Bundle selection cleared',
    'toast.bundle_copied': 'Bundle copied to clipboard!',
    'toast.css_copied': 'Code copied to clipboard',
    'toast.params_reset': 'Parameters reset',
  },
};

let currentLang: Language = 'es';

export function getLang(): Language {
  return currentLang;
}

export function t(key: keyof typeof translations['es']): string {
  const dict = translations[currentLang] || translations.es;
  return (dict as any)[key] || (translations.es as any)[key] || key;
}

export function applyTranslations(): void {
  // 1. Text elements con data-i18n
  const elements = document.querySelectorAll<HTMLElement>('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n') as keyof typeof translations['es'];
    if (key) {
      el.textContent = t(key);
    }
  });

  // 2. Elementos con atributos traducibles data-i18n-attr="placeholder:gallery.search_placeholder"
  const attrElements = document.querySelectorAll<HTMLElement>('[data-i18n-attr]');
  attrElements.forEach((el) => {
    const spec = el.getAttribute('data-i18n-attr') || '';
    const parts = spec.split(';');
    parts.forEach((p) => {
      const [attr, key] = p.split(':').map((s) => s.trim());
      if (attr && key) {
        el.setAttribute(attr, t(key as any));
      }
    });
  });

  // 3. Actualizar categoría en etiquetas de píldoras de filtro preservando conteos y data-filter canónico
  const categoryMap: Record<string, keyof typeof translations['es']> = {
    'Todas': 'category.all',
    'Patrones UI': 'category.patterns',
    'Entrada': 'category.entrances',
    'Énfasis': 'category.emphasis',
    'Carga': 'category.loading',
    'Texto': 'category.text',
    'Interacción': 'category.interaction',
    'Favoritos': 'category.favorites',
  };

  const filterPills = document.querySelectorAll<HTMLElement>('.filter-pill[data-filter]');
  filterPills.forEach((pill) => {
    const filterKey = pill.getAttribute('data-filter') || '';
    const textSpan = pill.querySelector('span:first-child');
    if (textSpan && categoryMap[filterKey]) {
      textSpan.textContent = t(categoryMap[filterKey]);
    }
  });

  // 4. Actualizar etiquetas de categorías en las tarjetas (preview-tag--category)
  const cardCategoryTags = document.querySelectorAll<HTMLElement>('.preview-tag--category');
  cardCategoryTags.forEach((tag) => {
    const originalText = tag.getAttribute('data-category-original') || tag.textContent?.trim() || '';
    if (!tag.hasAttribute('data-category-original')) {
      tag.setAttribute('data-category-original', originalText);
    }
    if (categoryMap[originalText]) {
      tag.textContent = t(categoryMap[originalText]);
    }
  });

  // 5. Actualizar selector de tamaño de página (botón "Todas" / "All")
  const allPageBtn = document.querySelector<HTMLElement>('[data-page-size="all"]');
  if (allPageBtn) {
    allPageBtn.textContent = t('pagination.all_pages');
  }

  // 6. Actualizar indicador de idioma actual en el botón
  const langDisplay = document.querySelector<HTMLElement>('[data-lang-current]');
  if (langDisplay) {
    langDisplay.textContent = currentLang.toUpperCase();
  }

  // 7. Actualizar atributo lang en <html>
  document.documentElement.lang = currentLang;

  // Notificar al bus y emitir evento custom
  eventBus.emit('lang:change', { lang: currentLang });
  document.dispatchEvent(new CustomEvent('css-motion-lang-changed', { detail: { lang: currentLang } }));
}

export function setLang(lang: Language, showFeedback = true): void {
  currentLang = lang;
  try {
    localStorage.setItem('css_motion_lang', lang);
  } catch {}

  applyTranslations();

  if (showFeedback) {
    showToast(t('toast.lang_switched'));
  }
}

export function initI18n(): void {
  // Leer idioma preferido guardado o idioma del navegador
  try {
    const saved = localStorage.getItem('css_motion_lang') as Language | null;
    if (saved === 'es' || saved === 'en') {
      currentLang = saved;
    } else {
      const browserLang = navigator.language?.toLowerCase() || '';
      currentLang = browserLang.startsWith('es') ? 'es' : 'en';
    }
  } catch {
    currentLang = 'es';
  }

  // Botón de alternancia en Header
  const toggleBtn = document.querySelector<HTMLButtonElement>('[data-lang-toggle]');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const nextLang: Language = currentLang === 'es' ? 'en' : 'es';
      setLang(nextLang, true);
    });
  }

  // Aplicar traducciones iniciales
  applyTranslations();
}
