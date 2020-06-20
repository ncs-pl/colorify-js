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
export default class Colorify {
  /**
   * Reset a string (clear colors)
   *
   * @param {string} str - The string to reset
   * @returns {string} - The string
   * @memberof Colorify
   */
  public reset(str: string): string {
    return `\u001b[0m${str}`;
  }

  /**
   * Make a string become black
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public black(str: string): string {
    return `\u001b[30m${str}`;
  }

  /**
   * Make a string become red
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public red(str: string): string {
    return `\u001b[31m${str}`;
  }

  /**
   * Make a string become green
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public green(str: string): string {
    return `\u001b[32m${str}`;
  }

  /**
   * Make a string become yellow
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public yellow(str: string): string {
    return `\u001b[33m${str}`;
  }

  /**
   * Make a string become blue
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public blue(str: string): string {
    return `\u001b[34m${str}`;
  }

  /**
   * Make a string become magenta
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public magenta(str: string): string {
    return `\u001b[35m${str}`;
  }

  /**
   * Make a string become cyan
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public cyan(str: string): string {
    return `\u001b[36m${str}`;
  }

  /**
   * Make a string become white
   *
   * @param {string} str - The string to color
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public white(str: string): string {
    return `\u001b[37m${str}`;
  }

  /**
   * Make a string background become black
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public bgBlack(str: string): string {
    return `\u001b[40m${str}`;
  }

  /**
   * Make a string background become red
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public bgRed(str: string): string {
    return `\u001b[41m${str}`;
  }

  /**
   * Make a string background become green
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public bgGreen(str: string): string {
    return `\u001b[42m${str}`;
  }

  /**
   * Make a string background become yellow
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public bgYellow(str: string): string {
    return `\u001b[43m${str}`;
  }

  /**
   * Make a string background become blue
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public bgBlue(str: string): string {
    return `\u001b[44m${str}`;
  }

  /**
   * Make a string background become magenta
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public bgMagenta(str: string): string {
    return `\u001b[45m${str}`;
  }

  /**
   * Make a string background become cyan
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public bgCyan(str: string): string {
    return `\u001b[46m${str}`;
  }

  /**
   * Make a string background become white
   *
   * @param {string} str - The string
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public bgWhite(str: string): string {
    return `\u001b[47m${str}`;
  }

  /**
   * Make a string become a Zebra!
   *
   * @param {string} str - The string to transform
   * @returns {string} - The modified string
   * @memberof Colorify
   */
  public zebra(str: string): string {
    const newWord: string[] = [];
    let black: boolean = [true, false][Math.floor(Math.random() * 2)];
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
