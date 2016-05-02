/*!
  * key.js v1.0.6 (https://github.com/alienfast/key.js#readme)
  * Copyright 2016 Kevin Ross <kevin.ross@alienfast.com> (https://github.com/rosskevin)
  * Licensed under MIT
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.keyJs = global.keyJs || {})));
}(this, function (exports) { 'use strict';

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers;

  var Keycodes = {
    WIN_KEY_FF_LINUX: 0,
    MAC_ENTER: 3,
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33, // also NUM_NORTH_EAST
    PAGE_DOWN: 34, // also NUM_SOUTH_EAST
    END: 35, // also NUM_SOUTH_WEST
    HOME: 36, // also NUM_NORTH_WEST
    LEFT: 37, // also NUM_WEST
    UP: 38, // also NUM_NORTH
    RIGHT: 39, // also NUM_EAST
    DOWN: 40, // also NUM_SOUTH
    PRINT_SCREEN: 44,
    INSERT: 45, // also NUM_INSERT
    DELETE: 46, // also NUM_DELETE
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    FF_SEMICOLON: 59, // Firefox (Gecko) fires this for semicolon instead of 186
    FF_EQUALS: 61, // Firefox (Gecko) fires this for equals instead of 187
    FF_DASH: 173, // Firefox (Gecko) fires this for dash instead of 189
    QUESTION_MARK: 63, // needs localization
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91, // WIN_KEY_LEFT
    WIN_KEY_RIGHT: 92,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SCROLL_LOCK: 145,

    // OS-specific media keys like volume controls and browser controls.
    FIRST_MEDIA_KEY: 166,
    LAST_MEDIA_KEY: 183,

    SEMICOLON: 186, // needs localization
    DASH: 189, // needs localization
    EQUALS: 187, // needs localization
    COMMA: 188, // needs localization
    PERIOD: 190, // needs localization
    SLASH: 191, // needs localization
    APOSTROPHE: 192, // needs localization
    TILDE: 192, // needs localization
    SINGLE_QUOTE: 222, // needs localization
    OPEN_SQUARE_BRACKET: 219, // needs localization
    BACKSLASH: 220, // needs localization
    CLOSE_SQUARE_BRACKET: 221, // needs localization
    WIN_KEY: 224,
    MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
    MAC_WK_CMD_LEFT: 91, // WebKit Left Command key fired, same as META
    MAC_WK_CMD_RIGHT: 93, // WebKit Right Command key fired, different from META
    WIN_IME: 229
  };

  var Key = function () {
    function Key() {
      babelHelpers.classCallCheck(this, Key);
    }

    babelHelpers.createClass(Key, null, [{
      key: "is",

      /**
       *
       * @param ev
       * @param codes - one to many Keycodes
       * @returns {boolean} - true if any of the given codes
       */
      value: function is(ev) {
        for (var _len = arguments.length, codes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          codes[_key - 1] = arguments[_key];
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = codes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var code = _step.value;

            if (this.toCode(ev) === code) {
              return true;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return false;
      }

      /**
       *
       * @param ev
       * @param codes - one to many Keycodes
       * @returns {boolean} - true if _none_ of the codes
       */

    }, {
      key: "isNot",
      value: function isNot(ev) {
        for (var _len2 = arguments.length, codes = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          codes[_key2 - 1] = arguments[_key2];
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = codes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var code = _step2.value;

            if (this.toCode(ev) === code) {
              return false;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return true;
      }
    }, {
      key: "toCode",
      value: function toCode(ev) {
        return ev.keyCode || ev.which;
      }
    }]);
    return Key;
  }();

  exports.Keycodes = Keycodes;
  exports.Key = Key;

}));
//# sourceMappingURL=key.umd.js.map