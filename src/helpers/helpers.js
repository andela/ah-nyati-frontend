/**
 * @class Helpers
 * @description contains all helper functions
 */
class Helpers {
  /**
   * @static
   * @description - returns the character count based on window width
   * @param {integer} windowWidth - the current window width
   */
  static setCount(windowWidth) {
    let count;
    if (windowWidth > 2000) {
      count = 10000;
    } else if (windowWidth > 1200) {
      count = 150;
    } else if (windowWidth > 1100) {
      count = 120;
    } else if (windowWidth > 900) {
      count = 100;
    } else if (windowWidth > 600) {
      count = 70;
    } else if (windowWidth > 500) {
      count = 120;
    } else if (windowWidth > 450) {
      count = 70;
    } else if (windowWidth < 451) {
      count = 50;
    }
    return count;
  }
}

export default Helpers;
