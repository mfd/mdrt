import BarbaPageBase from '../barba/BarbaPageBase';

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

  hide(container, promise) {
    super.hide(container,promise);

    // this.listEpisode.kill();
    // this.listEpisode = null;

  }
}

export default Page;
