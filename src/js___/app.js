/*
 * This is the main entry point for the JS.
 *
 * Folder are separated in this way:
 * - components: site specific modules
 * - utils: utilities / helpers / generic parts used throught the app.
 * - vendor: thirdy part libraries
 */

require('gsap');
require('gsap/ScrollToPlugin');
//require('whatwg-fetch');
//require('./utils/polyfills');
//require('vendor/modernizr');
//require('vendor/detectizr');

// Requires
const WebFont = require('webfontloader');

// Polyfills
import ObjectFitImages from 'object-fit-images';
// import SVG4Everybody from 'svg4everybody';

// Dependencies
import Manager from './templates/viewManager';

// Madyart Class
class Madyart {
  constructor() {
    Promise
      //.all([Madyart.fontReady(), Madyart.domReady()])
      .all([Madyart.domReady])
      .then(Madyart.init)
      .then(Madyart.polyfill);
  }

  static domReady() {
    return new Promise(resolve => {
      document.addEventListener('DOMContentLoaded', resolve);
    });
  }

  static fontReady() {
    return new Promise(resolve => {
      WebFont.load({
        custom: {
          families: ['Gals']
        }
        // google: {
        //   families: ['Roboto'],
        //   active: () => resolve(),
        //   inactive: () => resolve(),
        // },
      });
    });
  }
  static init() {
    // Ready
    document.documentElement.classList.add('ready');

    // Manager
    // eslint-disable-next-line
    new Manager();
  }

  static polyfill() {
    // Apply Polyfills
    //ObjectFitImages();
    // SVG4Everybody();
  }
}

new Madyart(); // eslint-disable-line
