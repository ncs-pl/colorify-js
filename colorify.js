/**
 * A class functions that color texts
 * * Colors:
 *  * Black: \u001b[30m
 *  * Red: \u001b[31m
 *  * Green: \u001b[32m
 *  * Yellow: \u001b[33m
 *  * Blue: \u001b[34m
 *  * Magenta: \u001b[35m
 *  * Cyan: \u001b[36m
 *  * White: \u001b[37m
 *  * Reset: \u001b[0m
 * * Backgrounds:
 *  * bgBlack: \u001b[40m
 *  * bgRed: \u001b[41m
 *  * bgGreen: \u001b[42m
 *  * bgYellow: \u001b[43m
 *  * bgBlue: \u001b[44m
 *  * bgMagenta: \u001b[45m
 *  * bgCyan: \u001b[46m
 *  * bgWhite: \u001b[47m
 *  * Reset: \u001b[0m
 *
 * @class Colorify
 * @exports
 */
class Colorify {
  /**
   * Reset a string (clear colors)
   *
   * @param {string} str - The string to reset
   * @returns {string} - The string
   * @memberof Colorify
   */
   reset(str) {
    return `\u001b[0m${str}`;
  }

  /**
   * Make a string become black
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   black(str) {
    return `\u001b[30m${str}`;
  }

  /**
   * Make a string become red
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   red(str) {
    return `\u001b[31m${str}`;
  }

  /**
   * Make a string become green
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   green(str) {
    return `\u001b[32m${str}`;
  }

  /**
   * Make a string become yellow
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   yellow(str) {
    return `\u001b[33m${str}`;
  }

  /**
   * Make a string become blue
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   blue(str) {
    return `\u001b[34m${str}`;
  }

  /**
   * Make a string become magenta
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   magenta(str) {
    return `\u001b[35m${str}`;
  }

  /**
   * Make a string become cyan
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   cyan(str) {
    return `\u001b[36m${str}`;
  }

  /**
   * Make a string become white
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   white(str) {
    return `\u001b[37m${str}`;
  }

  /**
   * Make a string background become black
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   bgBlack(str) {
    return `\u001b[40m${str}`;
  }

  /**
   * Make a string background become red
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   bgRed(str) {
    return `\u001b[41m${str}`;
  }

  /**
   * Make a string background become green
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   bgGreen(str) {
    return `\u001b[42m${str}`;
  }

  /**
   * Make a string background become yellow
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   bgYellow(str) {
    return `\u001b[43m${str}`;
  }

  /**
   * Make a string background become blue
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   bgBlue(str) {
    return `\u001b[44m${str}`;
  }

  /**
   * Make a string background become magenta
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   bgMagenta(str) {
    return `\u001b[45m${str}`;
  }

  /**
   * Make a string background become cyan
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   bgCyan(str) {
    return `\u001b[46m${str}`;
  }

  /**
   * Make a string background become white
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   bgWhite(str) {
    return `\u001b[47m${str}`;
  }

  /**
   * Make a string become a Zebra!
   *
   * @param {string} str - The string to transform
   * @returns {string} - The modified string
   * @memberof Colorify
   */
   zebra(str) {
    const newWord = [];
    let black = [true, false][Math.floor(Math.random() * 2)];
    for (const char of str) {
      if (black) {
        newWord.push(`\u001b[37m\u001b[40m${char}`);
      } else {
        newWord.push(`\u001b[30m\u001b[47m${char}`);
      }
      black = !black;
    }
    return newWord.join('');
  }
}

// Set to `module.exports = Colorify;` if you'r not supporting import / export
export Colorify;
