//import StoreMap from '../partial/StoreMap';
// const assign = require('lodash/assign');
// const forEach = require('lodash/forEach');
// const find = require('lodash/find');
import MapStores from '../partial/MapStores.js';

(function($) {
  $(document).on('change', '.select-store select', function() {
    var val = Number(this.value);
    if (val !== 0) {
      $('ul.b-stores-list li.store__item').each(function() {
        if ((Number($(this).data('select'))) !== val)
          $(this).hide();
        else $(this).show();
      });
    } else {
      $('ul.b-stores-list li.store__item').each(function() {
        $(this).show();
      });
    }
  });
})(jQuery);

export default class Stores {
  constructor() {
    this.view = document;
    this.onEnterCompleted();
  }
  onEnterCompleted() {
    console.log('🗺');
    this.storeMap = new MapStores(this.view);
  }
  onLeave() {
    this.storeMap.destroy();
  }
  hide(container, promise) {

  }
}
