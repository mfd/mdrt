/**
 * Adapted from http://zurb.com/playground/responsive-tables
 */
export default class Table {
  constructor(el) {
    this.switched = false;
    this.tmpDiv = null;
    this.table = el;

    this.updateTables();
    window.addEventListener('resize', this.updateTables.bind(this));
  }

  wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }

  unwrap(el) {
    const parent = el.parentNode;
    while (el.firstChild) parent.insertBefore(el.firstChild, el);
    parent.removeChild(el);
  }

  updateTables() {
    if ((window.innerWidth < 767) && !this.switched) {
      this.switched = true;
      this.splitTable(this.table);

      return true;
    } else if (this.switched && (window.innerWidth > 767)) {
      this.switched = false;
      this.unsplitTable(this.table);
    }
  }

  splitTable(original) {
    this.tmpDiv = document.createElement('div');
    this.tmpDiv.classList.add('table-wrapper');
    this.wrap(original, this.tmpDiv);

    const copy = original.cloneNode(true);
    Array.from(copy.querySelectorAll('td:not(:first-child), th:not(:first-child)')).forEach(el => {
      el.style.display = 'none';
    });
    copy.classList.remove('responsive-table');

    original.closest('.table-wrapper').appendChild(copy);
    this.tmpDiv = document.createElement('div');
    this.tmpDiv.classList.add('pinned');
    this.wrap(copy, this.tmpDiv);

    this.tmpDiv = document.createElement('div');
    this.tmpDiv.classList.add('scrollable');
    this.wrap(original, this.tmpDiv);

    this.setCellHeights(original, copy);
  }

  unsplitTable(original) {
    const p = original.closest('.table-wrapper').querySelector('.pinned');
    p.parentNode.removeChild(p);
    this.unwrap(original.parentNode);
    this.unwrap(original.parentNode);
  }

  setCellHeights(original, copy) {
    const trs = Array.from(original.querySelectorAll('tr'));
    const trsCopy = Array.from(copy.querySelectorAll('tr'));
    const heights = [];

    trs.forEach((tr, index) => {
      const txs = Array.from(tr.querySelectorAll('th, td'));

      txs.forEach((tx) => {
        const height = tx.offsetHeight;
        heights[index] = heights[index] || 0;
        if (height > heights[index]) heights[index] = height;
      });
    });

    trsCopy.forEach((tr, index) => {
      tr.style.height = `${heights[index]}px`;
    });
  }
}
