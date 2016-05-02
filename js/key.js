const Key = class {
  /**
   *
   * @param ev
   * @param codes - one to many Keycodes
   * @returns {boolean} - true if any of the given codes
   */
  static is(ev, ...codes) {
    for (let code of codes) {
      if (this.toCode(ev) === code) {
        return true
      }
    }

    return false
  }

  /**
   *
   * @param ev
   * @param codes - one to many Keycodes
   * @returns {boolean} - true if _none_ of the codes
   */
  static isNot(ev, ...codes) {
    for (let code of codes) {
      if (this.toCode(ev) === code) {
        return false
      }
    }

    return true
  }

  static toCode(ev) {
    return (ev.keyCode || ev.which)
  }
}

export default Key
