// filters.ts — Filtros de categoría, buscador en vivo y atajos de teclado

export function initFilters(cards: HTMLElement[]): void {
  const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-filter]'));
  const searchInput = document.querySelector<HTMLInputElement>('[data-search]');
  const clearSearchBtn = document.querySelector<HTMLButtonElement>('[data-clear-search]');
  const resultCount = document.querySelector<HTMLElement>('[data-result-count]');
  const emptyState = document.querySelector<HTMLElement>('[data-empty-state]');
  const resetFiltersBtn = document.querySelector<HTMLButtonElement>('[data-reset-filters]');

  let activeCategory = 'Todas';

  function updateCards(): void {
    if (!searchInput) return;
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    if (clearSearchBtn) {
      clearSearchBtn.hidden = query.length === 0;
    }

    for (const card of cards) {
      const category = card.dataset.category || '';
      const name = card.dataset.name || '';
      const id = card.dataset.id || '';
      const specs = card.querySelector('.tech-spec-code')?.textContent?.toLowerCase() || '';

      const matchesCategory = activeCategory === 'Todas' || category === activeCategory;
      const matchesSearch =
        query === '' ||
        name.includes(query) ||
        category.toLowerCase().includes(query) ||
        id.includes(query) ||
        specs.includes(query);

      const visible = matchesCategory && matchesSearch;
      card.hidden = !visible;
      if (visible) visibleCount++;
    }

    if (resultCount) resultCount.textContent = String(visibleCount);
    if (emptyState) emptyState.hidden = visibleCount !== 0;
  }

  // Eventos de botones de categoría
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.filter || 'Todas';
      filterButtons.forEach((btn) => {
        btn.setAttribute('aria-pressed', String(btn === button));
      });
      updateCards();
    });
  });

  // Evento de búsqueda de texto
  if (searchInput) {
    searchInput.addEventListener('input', updateCards);
  }

  // Limpiar búsqueda
  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      updateCards();
      searchInput.focus();
    });
  }

  // Restablecer todos los filtros
  if (resetFiltersBtn && searchInput) {
    resetFiltersBtn.addEventListener('click', () => {
      activeCategory = 'Todas';
      filterButtons.forEach((btn) => {
        btn.setAttribute('aria-pressed', String(btn.dataset.filter === 'Todas'));
      });
      searchInput.value = '';
      updateCards();
    });
  }

  // Atajos de teclado: '/' enfoca el buscador, 'Escape' lo limpia
  document.addEventListener('keydown', (event) => {
    if (
      event.key === '/' &&
      document.activeElement !== searchInput &&
      !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName || '')
    ) {
      event.preventDefault();
      searchInput?.focus();
    }
    if (event.key === 'Escape' && document.activeElement === searchInput && searchInput) {
      searchInput.value = '';
      searchInput.blur();
      updateCards();
    }
  });
}
