// filters.ts — Filtros de categoría, costo de renderizado (pipeline), buscador en vivo y paginación
import { eventBus } from './events';

export function initFilters(cards: HTMLElement[]): void {
  const ITEMS_PER_PAGE = 6;
  let currentPage = 1;
  let activeCategory = 'Todas';
  let activeCost = 'all';

  const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-filter]'));
  const costButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-cost-filter]'));
  const searchInput = document.querySelector<HTMLInputElement>('[data-search]');
  const clearSearchBtn = document.querySelector<HTMLButtonElement>('[data-clear-search]');
  const resultCount = document.querySelector<HTMLElement>('[data-result-count]');
  const emptyState = document.querySelector<HTMLElement>('[data-empty-state]');
  const resetFiltersBtn = document.querySelector<HTMLButtonElement>('[data-reset-filters]');

  // Elementos de la barra de paginación
  const paginationBar = document.querySelector<HTMLElement>('[data-pagination-bar]');
  const paginationInfo = document.querySelector<HTMLElement>('[data-pagination-info]');
  const paginationNumbers = document.querySelector<HTMLElement>('[data-pagination-numbers]');
  const prevBtn = document.querySelector<HTMLButtonElement>('[data-page-prev]');
  const nextBtn = document.querySelector<HTMLButtonElement>('[data-page-next]');

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

    // 1. Filtrar las tarjetas que coinciden con categoría, costo y búsqueda
    const matchingCards = cards.filter((card) => {
      const category = card.dataset.category || '';
      const name = card.dataset.name || '';
      const id = card.dataset.id || '';
      const costType = card.dataset.costType || '';
      const specs = card.querySelector('.tech-spec-code')?.textContent?.toLowerCase() || '';

      const matchesCategory = activeCategory === 'Todas' || category === activeCategory;
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
    const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));

    // Ajustar límites de página actual
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    if (currentPage < 1) {
      currentPage = 1;
    }

    // 2. Extraer el segmento visible para la página actual (6 por página)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
    const visibleCardsSet = new Set(matchingCards.slice(startIndex, endIndex));

    // 3. Aplicar visibilidad a todas las tarjetas
    cards.forEach((card) => {
      const isVisible = visibleCardsSet.has(card);
      card.hidden = !isVisible;
    });

    // 4. Actualizar estado de botones de filtro de categoría
    filterButtons.forEach((btn) => {
      const isSelected = btn.dataset.filter === activeCategory;
      btn.setAttribute('aria-pressed', String(isSelected));
      btn.classList.toggle('is-active', isSelected);
    });

    // 4b. Actualizar estado de botones de filtro de pipeline
    costButtons.forEach((btn) => {
      const isSelected = btn.dataset.costFilter === activeCost;
      btn.setAttribute('aria-pressed', String(isSelected));
      btn.classList.toggle('is-active', isSelected);
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

    // 7. Actualizar controles de paginación
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

    eventBus.emit('filter:change', {
      category: activeCategory,
      costType: activeCost as any,
      searchQuery: query,
      currentPage,
      pageSize: ITEMS_PER_PAGE,
    });

    if (shouldScroll) {
      scrollToGalleryTop();
    }
  }

  // Eventos de botones de categoría
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.filter || 'Todas';
      currentPage = 1;
      updateGallery(false);
    });
  });

  // Eventos de botones de pipeline (costo)
  costButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeCost = button.dataset.costFilter || 'all';
      currentPage = 1;
      updateGallery(false);
    });
  });

  // Evento de búsqueda de texto
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

  // Restablecer todos los filtros
  if (resetFiltersBtn && searchInput) {
    resetFiltersBtn.addEventListener('click', () => {
      activeCategory = 'Todas';
      activeCost = 'all';
      searchInput.value = '';
      currentPage = 1;
      updateGallery(false);
    });
  }

  // Botones Anterior / Siguiente
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        updateGallery(true);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
      const matchingCount = cards.filter((card) => {
        const cat = card.dataset.category || '';
        const name = card.dataset.name || '';
        const id = card.dataset.id || '';
        const cost = card.dataset.costType || '';
        const specs = card.querySelector('.tech-spec-code')?.textContent?.toLowerCase() || '';
        return (
          (activeCategory === 'Todas' || cat === activeCategory) &&
          (activeCost === 'all' || cost === activeCost) &&
          (query === '' || name.includes(query) || cat.toLowerCase().includes(query) || id.includes(query) || specs.includes(query))
        );
      }).length;
      const totalPages = Math.max(1, Math.ceil(matchingCount / ITEMS_PER_PAGE));

      if (currentPage < totalPages) {
        currentPage++;
        updateGallery(true);
      }
    });
  }

  // Acceso directo con teclado: pulsar '/' para enfocar buscador
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag !== 'input' && activeTag !== 'textarea') {
        e.preventDefault();
        searchInput?.focus();
      }
    }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      if (searchInput) searchInput.value = '';
      currentPage = 1;
      updateGallery(false);
      searchInput?.blur();
    }
  });

  // Inicializar estado de la galería
  updateGallery(false);
}
