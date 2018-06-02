/* Imports */
import NavigationHandler from './components/navigationHandler.js'
import AnchorHandler from './components/anchorHandler.js'
// const Blazy = require('blazy');
// const AOS = require('aos');
// import $ from 'jquery';

/**
* Main app object that handles everything
*/
class AppObject {
  constructor (basepath) {
    this.path = basepath
  }

  /**
  * Init function
  * Start up various scripts as needed
  */
  static init () {
    /* Example of loading in an external library: Blazy loading
    let bLazy = new Blazy({
    offset: 1000 // Loads images 1000px before they're visible
    });
    */

    /* Example of external library: Aos animations
    setTimeout(() => {
        AOS.init();
    }, 500);
    */
    /*
    * Example of initializing a custom component:
    */
    // Anchors

    // if ($('.accordion').length > 0) {
    let anchor = new AnchorHandler()
    anchor.init()
    // }

    // Navigation
    // if ($('.navbar-toggle').length > 0) {
    let nav = new NavigationHandler()
    nav.init()
    // }
  }

  /*****
  Handle all functions that require main scope (shared across components) below:
  *****/

  /**
  * Obtain the offset of an element
  * @param {object} el the element to find the offset for
  */
  findOffset (el) {
    return el.offset()
  }

  /*****
  Handle all events that require main scope below:
  *****/

  /**
  * Resize events - called from app.js
  */
  checkSearch () {
    // Do stuff
  }

  /**
  * Scroll events - called from app.js
  */
  pinNav (e) {
    // Do stuff
  }
}
export default AppObject
