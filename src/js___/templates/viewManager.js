// Dependencies
const Barba = require('barba.js');
// Transitions
const Fade = require('transitions/fade');

// Static
// import Header from 'partials/chrome/header';
// import Footer from 'partials/chrome/footer';
// import FAQ from 'modules/faq';
// import Anchors from 'modules/anchors';
// import FakeSelect from 'components/fakeSelect';

// Globals
//import Charts from 'partials/charts';
//import Map from 'partials/map';

// Views
const Views = {
  //Home: require('templates/home/index'),
  // News: require('templates/news'),
  // About: require('templates/about'),
  // Cases: require('templates/cases'),
  // Contact: require('templates/contact')
};

class Manager {
  constructor() {
    this.initShared();
    this.initViews();
    this.initBarba();

    // Events
    this._resize = this.resize.bind(this);
    this._update = this.update.bind(this);

    // Resize Event
    window.addEventListener('resize', this._resize);

    // RAF
    window.requestAnimationFrame(this._update);
  }
  /**
   * Init Barba: Initialize Barba.js.
   */
  initBarba() {
    Barba.Pjax.init();
    Barba.Prefetch.init();
    Barba.Pjax.getTransition = this.getTransition.bind(this);

    /**
     * Disable Barba.js if the user is logged
     * Otherwise barba.js will try to use PJAX navigation
     * on the WP admin links.
     */
    // if (window.EDFIINFO.ADMIN_BAR_VISIBLE) {
    //   Barba.Pjax.preventCheck = () => { return false };
    // }
  }
  static initViews() {
    const keys = Object.keys(Views);

    for (let i = 0; i < keys.length; i++) {
      if (Views[keys[i]].init) {
        Views[keys[i]].init();
      }
    }
  }
  initShared() {
    new Header();
  }
}
export default Manager;
//module.exports =  Manager;
