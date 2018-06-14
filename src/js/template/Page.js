import BarbaPageBase from '../barba/BarbaPageBase';
//import tippy from 'tippy.js';

class Page extends BarbaPageBase {

  constructor() {
    super('page');
  }

  display(container) {

    console.log('Start page');



    // Scroll
    //this.pagination = new TimelineLite();
    //this.controller = new ScrollMagic.Controller();
    //this.listItems = new TimelineLite();
    //this.head = new TimelineLite();

  }
  onEnter() {
    super.onEnter();

    this.tips = tippy(document.querySelectorAll('[data-tippy]'));
    this.tipCatalogSort = tippy('#catalog-sort', {
      html: document.querySelector('#catalog-sort__dropdown'),
      theme: 'mdrt',
      placement: 'bottom',
      arrow: true,
      trigger: 'click',
      interactive: true
    });
  }

  onEnterCompleted() {
    super.onEnterCompleted();


  }
  hide(container, promise) {
    super.hide(container,promise);
    debugger;

    this.tipCatalogSort.destroyAll();
    // this.listEpisode.kill();
    // this.listEpisode = null;

  }
}

export default Page;
