/* Imports */
// import $ from 'jquery';

/**
* Navigation functions
*/
class AnchorHandler {
  constructor () {
    this.basepath = ''
    this.hash = ''
    this.goToAnchor()
  }

  /********************
  * Getters and Setters
  */
  set BasePath (path) {
    this.basepath = path
  }
  /********************/

  /**
  * Handle anchor points
  * @param {string} h the url anchor
  */
  goToAnchor (h) {
    /* if ($('.something').length > 0) {

    } */
  }
}
export default AnchorHandler
