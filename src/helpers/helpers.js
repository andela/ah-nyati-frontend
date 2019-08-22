import _ from 'lodash';

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
      count = 100;
    } else if (windowWidth > 900) {
      count = 50;
    } else if (windowWidth > 600) {
      count = 70;
    } else if (windowWidth > 500) {
      count = 70;
    } else if (windowWidth > 450) {
      count = 70;
    } else if (windowWidth < 451) {
      count = 50;
    }
    return count;
  }

  /**
   * @memberof Helpers
   * @description - checks whether an array contains duplicate items
   * @static
   * @param {array} array - array of objects to be checked for duplicates
   * @param {property} string - object key to be used for duplicate check
   * @returns {boolean} - the result of the check
   */
  static checkDuplicate(array, property) {
    const unique = _.uniqBy(array, property);
    // console.log(array);

    return unique.length < array.length;
  }

  /**
   * @memberof Helpers
   * @static
   * @description - filters out duplicate items from array and returns it
   * @param {array} array - array of objects to be filtered
   * @param {property} string - object key to be used for duplicate check
   * @returns {array} - the array containing unique items
   */
  static removeDuplicate(array, property) {
    const unique = _.uniqBy(array, property);

    return unique;
  }

  /**
   * @memberof Helpers
   * @static
   * @description - Converts a string to a Boolean value
   * @param {string} stringInput - string to be converted to Boolean
   * @returns {boolean} - the boolean equivalent of the string input
   */
  static stringToBoolean(stringInput) {
    const lowercaseString = stringInput ? stringInput.toLowerCase() : null;
    switch (lowercaseString) {
      case 'true':
        return true;

      case 'false':
        return false;

      default:
        return undefined;
    }
  }

  /**
   * @memberof Helpers
   * @static
   * @description - redirects the page to dashboard
   * @param {boolean} authFlag - authentication flag
   * @param {object} history - the history object
   */
  static redirectToDashboard(authFlag, history) {
    if (authFlag) {
      history.push('/dashboard');
    }
  }
}

export default Helpers;
