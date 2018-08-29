import 'babel-polyfill';
// import $ from 'jquery';
// import jQuery from 'jquery';
// window.$ = $;
// window.jQuery = jQuery;
// import 'TweenMax';
//import 'TimelineLite';
import 'owl.carousel';

// import Menu from './partial/Menu';
import Header from './partial/Header';
import Menu from './partial/Menu';
import owlCarousel from './partial/owlCarousel';

import Base from './template/_Base';
import Home from './template/Home';
import OneItem from './template/OneItem';
import Stores from './template/Stores';

class Main {
  constructor() {
    $(this.ready.bind(this));
  }
  ready() {
    // INIT VIEWS
    new Header();
    new Menu();
    new Base();
    if ($('[data-namespace="homepage"]').length)
      this.home = new Home();
    if ($('[data-namespace="oneitem"]').length)
      this.oneitem = new OneItem();
    if ($('[data-namespace="stores"]').length)
      this.stores = new Stores();
  }
}

new Main();
