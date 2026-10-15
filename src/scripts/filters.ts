// filters.ts — Filtros de categoría, costo (pipeline), buscador en vivo, favoritos y paginación avanzada
import { eventBus } from './events';
import { showToast } from './toast';

export function initFilters(cards: HTMLElement[]): void {
  // 1. Configuración de Paginación y Preferencias Persistentes
  const savedPageSize = localStorage.getItem('css_motion_page_size');
  let itemsPerPage = savedPageSize === 'all' ? 120 : parseInt(savedPageSize || '6', 10);
  if (isNaN(itemsPerPage) || itemsPerPage <= 0) itemsPerPage = 6;

  let currentPage = 1;
  let activeCategory = 'Todas';
  let activeCost = 'all';

  // 2. Gestión de Favoritos persistentes (localStorage)
  const favoriteIds = new Set<string>();
  try {
    const rawFavs = localStorage.getItem('css_motion_favorites');
    if (rawFavs) {
      const parsed = JSON.parse(rawFavs);
      if (Array.isArray(parsed)) {
        parsed.forEach((id) => favoriteIds.add(id));
      }
    }
  } catch {}

  function saveFavorites(): void {
    try {
      localStorage.setItem('css_motion_favorites', JSON.stringify(Array.from(favoriteIds)));
    } catch {}
  }

  function updateFavoritesUI(): void {
    const favCountEl = document.querySelector<HTMLElement>('[data-favorites-count]');
    if (favCountEl) {
      favCountEl.textContent = String(favoriteIds.size);
    }

    cards.forEach((card) => {
      const id = card.dataset.id;
      if (!id) return;
      const isFav = favoriteIds.has(id);
      const favBtn = card.querySelector<HTMLButtonElement>('[data-favorite-toggle]');
      if (favBtn) {
        favBtn.classList.toggle('is-favorite', isFav);
        favBtn.setAttribute('aria-pressed', String(isFav));
        const svg = favBtn.querySelector('svg');
        if (svg) {
          svg.setAttribute('fill', isFav ? 'currentColor' : 'none');
        }
      }
    });
  }

  // 3. Selectores del DOM
  const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-filter]'));
  const costButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-cost-filter]'));
  const searchInput = document.querySelector<HTMLInputElement>('[data-search]');
  const clearSearchBtn = document.querySelector<HTMLButtonElement>('[data-clear-search]');
  const resultCount = document.querySelector<HTMLElement>('[data-result-count]');
  const emptyState = document.querySelector<HTMLElement>('[data-empty-state]');
  const resetFiltersBtn = document.querySelector<HTMLButtonElement>('[data-reset-filters]');

  // Controles de Paginación Principal (Inferior)
  const paginationBar = document.querySelector<HTMLElement>('[data-pagination-bar]');
  const paginationInfo = document.querySelector<HTMLElement>('[data-pagination-info]');
  const paginationNumbers = document.querySelector<HTMLElement>('[data-pagination-numbers]');
  const prevBtn = document.querySelector<HTMLButtonElement>('[data-page-prev]');
  const nextBtn = document.querySelector<HTMLButtonElement>('[data-page-next]');
  const pageSizeButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-page-size]'));

  // Controles de Paginación Rápida (Superior)
  const topPrevBtn = document.querySelector<HTMLButtonElement>('[data-page-prev-top]');
  const topNextBtn = document.querySelector<HTMLButtonElement>('[data-page-next-top]');
  const topIndicator = document.querySelector<HTMLElement>('[data-page-indicator-top]');

  // Botón Volver Arriba Flotante
  const backToTopBtn = document.querySelector<HTMLButtonElement>('[data-back-to-top]');

  // Controles de Velocidad Global
  const speedButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-speed]'));

  function scrollToGalleryTop(): void {
    const librarySection = document.getElementById('biblioteca');
    if (librarySection) {
      const topOffset = librarySection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, topOffset), behavior: 'smooth' });
    }
  }

  function renderPageNumbers(totalPages: number): void {
    if (!paginationNumbers) return;
    paginationNumbers.innerHTML = '';

    if (totalPages <= 1) return;

    let pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages = [1, 2, 3, 4, 5, '...', totalPages];
      } else if (currentPage >= totalPages - 3) {
        pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
      }
    }

    pages.forEach((p) => {
      if (typeof p === 'number') {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `page-num-btn${p === currentPage ? ' is-active' : ''}`;
        btn.textContent = String(p);
        btn.setAttribute('aria-label', `Ir a la página ${p}`);
        if (p === currentPage) {
          btn.setAttribute('aria-current', 'page');
        }
        btn.addEventListener('click', () => {
          if (currentPage !== p) {
            currentPage = p;
            updateGallery(true);
          }
        });
        paginationNumbers.appendChild(btn);
      } else {
        const span = document.createElement('span');
        span.className = 'page-num-ellipsis';
        span.textContent = '…';
        span.setAttribute('aria-hidden', 'true');
        paginationNumbers.appendChild(span);
      }
    });
  }

  function updateGallery(shouldScroll = false): void {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    if (clearSearchBtn) {
      clearSearchBtn.hidden = query.length === 0;
    }

    // 1. Filtrar las tarjetas que coinciden con categoría, favoritos, costo y búsqueda
    const matchingCards = cards.filter((card) => {
      const category = card.dataset.category || '';
      const name = card.dataset.name || '';
      const id = card.dataset.id || '';
      const costType = card.dataset.costType || '';
      const specs = card.querySelector('.tech-spec-code')?.textContent?.toLowerCase() || '';

      let matchesCategory = false;
      if (activeCategory === 'Todas') {
        matchesCategory = true;
      } else if (activeCategory === 'Favoritos') {
        matchesCategory = favoriteIds.has(id);
      } else {
        matchesCategory = category === activeCategory;
      }

      const matchesCost = activeCost === 'all' || costType === activeCost;
      const matchesSearch =
        query === '' ||
        name.includes(query) ||
        category.toLowerCase().includes(query) ||
        id.includes(query) ||
        specs.includes(query);

      return matchesCategory && matchesCost && matchesSearch;
    });

    const totalItems = matchingCards.length;
    const effectivePageSize = itemsPerPage;
    const totalPages = Math.max(1, Math.ceil(totalItems / effectivePageSize));

    // Ajustar límites de página actual
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    if (currentPage < 1) {
      currentPage = 1;
    }

    // 2. Extraer el segmento visible para la página actual
    const startIndex = (currentPage - 1) * effectivePageSize;
    const endIndex = Math.min(startIndex + effectivePageSize, totalItems);
    const visibleCardsSet = new Set(matchingCards.slice(startIndex, endIndex));

    // 3. Aplicar visibilidad a todas las tarjetas
    cards.forEach((card) => {
      const isVisible = visibleCardsSet.has(card);
      card.hidden = !isVisible;
    });

    // 4. Actualizar botones de filtro de categoría
    filterButtons.forEach((btn) => {
      const isSelected = btn.dataset.filter === activeCategory;
      btn.setAttribute('aria-pressed', String(isSelected));
      btn.classList.toggle('is-active', isSelected);
    });

    // 4b. Actualizar botones de pipeline
    costButtons.forEach((btn) => {
      const isSelected = btn.dataset.costFilter === activeCost;
      btn.setAttribute('aria-pressed', String(isSelected));
      btn.classList.toggle('is-active', isSelected);
    });

    // 4c. Actualizar botones de selector de tamaño de página
    pageSizeButtons.forEach((btn) => {
      const sizeVal = btn.dataset.pageSize;
      const isSelected =
        (sizeVal === 'all' && itemsPerPage >= 120) ||
        parseInt(sizeVal || '0', 10) === itemsPerPage;
      btn.classList.toggle('is-active', isSelected);
      btn.setAttribute('aria-pressed', String(isSelected));
    });

    // 5. Actualizar contador superior
    if (resultCount) {
      if (totalItems === 0) {
        resultCount.textContent = '0';
      } else {
        resultCount.textContent = `${startIndex + 1}–${endIndex}`;
      }
    }

    // 6. Estado vacío
    if (emptyState) {
      emptyState.hidden = totalItems !== 0;
    }

    // 7. Sincronizar Paginación Superior (Mini-Paginación)
    if (topIndicator) {
      topIndicator.textContent = totalItems === 0 ? 'Pág. 0 / 0' : `Pág. ${currentPage} / ${totalPages}`;
    }
    if (topPrevBtn) {
      topPrevBtn.disabled = currentPage <= 1 || totalItems === 0;
    }
    if (topNextBtn) {
      topNextBtn.disabled = currentPage >= totalPages || totalItems === 0;
    }

    // 8. Sincronizar Paginación Principal (Inferior)
    if (paginationBar) {
      if (totalItems === 0) {
        paginationBar.hidden = true;
      } else {
        paginationBar.hidden = false;

        if (paginationInfo) {
          paginationInfo.textContent = `Página ${currentPage} de ${totalPages} · Mostrando ${startIndex + 1}–${endIndex} de ${totalItems} animaciones`;
        }

        if (prevBtn) {
          prevBtn.disabled = currentPage <= 1;
        }
        if (nextBtn) {
          nextBtn.disabled = currentPage >= totalPages;
        }

        renderPageNumbers(totalPages);
      }
    }

    updateFavoritesUI();

    eventBus.emit('filter:change', {
      category: activeCategory,
      costType: activeCost as any,
      searchQuery: query,
      currentPage,
      pageSize: effectivePageSize,
    });

    if (shouldScroll) {
      scrollToGalleryTop();
    }
  }

  // 4. Delegación de Eventos Interactivos de Filtros

  // Botones de categoría
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.filter || 'Todas';
      currentPage = 1;
      updateGallery(false);
    });
  });

  // Botones de pipeline (costo)
  costButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeCost = button.dataset.costFilter || 'all';
      currentPage = 1;
      updateGallery(false);
    });
  });

  // Selector de tamaño de página
  pageSizeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const val = button.dataset.pageSize;
      if (val === 'all') {
        itemsPerPage = 120;
        localStorage.setItem('css_motion_page_size', 'all');
      } else {
        const parsed = parseInt(val || '6', 10);
        itemsPerPage = parsed > 0 ? parsed : 6;
        localStorage.setItem('css_motion_page_size', String(itemsPerPage));
      }
      currentPage = 1;
      updateGallery(true);
      showToast(`Mostrando ${val === 'all' ? 'todas las' : itemsPerPage} animaciones por página`);
    });
  });

  // Búsqueda en vivo
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      currentPage = 1;
      updateGallery(false);
    });
  }

  // Limpiar búsqueda
  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentPage = 1;
      updateGallery(false);
      searchInput.focus();
    });
  }

  // Restablecer filtros
  if (resetFiltersBtn && searchInput) {
    resetFiltersBtn.addEventListener('click', () => {
      activeCategory = 'Todas';
      activeCost = 'all';
      searchInput.value = '';
      currentPage = 1;
      updateGallery(false);
      showToast('Filtros restablecidos');
    });
  }

  // Paginación: Navegación Anterior / Siguiente (Inferior y Superior)
  function goToPrevPage(): void {
    if (currentPage > 1) {
      currentPage--;
      updateGallery(true);
    }
  }

  function goToNextPage(): void {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const matchingCount = cards.filter((card) => {
      const cat = card.dataset.category || '';
      const name = card.dataset.name || '';
      const id = card.dataset.id || '';
      const cost = card.dataset.costType || '';
      const specs = card.querySelector('.tech-spec-code')?.textContent?.toLowerCase() || '';

      let matchesCat = false;
      if (activeCategory === 'Todas') matchesCat = true;
      else if (activeCategory === 'Favoritos') matchesCat = favoriteIds.has(id);
      else matchesCat = cat === activeCategory;

      return (
        matchesCat &&
        (activeCost === 'all' || cost === activeCost) &&
        (query === '' || name.includes(query) || cat.toLowerCase().includes(query) || id.includes(query) || specs.includes(query))
      );
    }).length;
    const totalPages = Math.max(1, Math.ceil(matchingCount / itemsPerPage));

    if (currentPage < totalPages) {
      currentPage++;
      updateGallery(true);
    }
  }

  prevBtn?.addEventListener('click', goToPrevPage);
  nextBtn?.addEventListener('click', goToNextPage);
  topPrevBtn?.addEventListener('click', goToPrevPage);
  topNextBtn?.addEventListener('click', goToNextPage);

  // Botón Volver Arriba
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      const isScrolled = window.scrollY > 400;
      backToTopBtn.classList.toggle('is-visible', isScrolled);
    });

    backToTopBtn.addEventListener('click', () => {
      scrollToGalleryTop();
    });
  }

  // Selector de velocidad de reproducción
  speedButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const speedVal = parseFloat(btn.dataset.speed || '1');
      speedButtons.forEach((b) => b.classList.toggle('is-active', b === btn));
      document.documentElement.style.setProperty('--motion-speed-rate', String(speedVal));
      eventBus.emit('motion:speed-change', { speed: speedVal });
      showToast(`Velocidad de reproducción ajustada a ${speedVal}x`);
    });
  });

  // Delegación de Click para Favoritos
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    const favBtn = target?.closest<HTMLButtonElement>('[data-favorite-toggle]');
    if (favBtn) {
      const card = favBtn.closest<HTMLElement>('[data-animation-card]');
      const id = card?.dataset.id;
      const name = card?.querySelector('h3')?.textContent || 'Animación';
      if (!id) return;

      if (favoriteIds.has(id)) {
        favoriteIds.delete(id);
        showToast(`Removida "${name}" de favoritos`);
      } else {
        favoriteIds.add(id);
        showToast(`¡Añadida "${name}" a favoritos! ⭐`);
      }

      saveFavorites();
      updateFavoritesUI();

      if (activeCategory === 'Favoritos') {
        updateGallery(false);
      }
    }
  });

  // Atajos de teclado para paginación y búsqueda
  window.addEventListener('keydown', (e) => {
    const activeTag = document.activeElement?.tagName.toLowerCase();
    if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
      if (e.key === 'Escape') {
        (document.activeElement as HTMLElement)?.blur();
      }
      return;
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevPage();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNextPage();
    }
  });

  // Inicializar estado de la galería
  updateGallery(false);
}
