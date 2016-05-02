[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

# key.js
ES2015 library with constants to check if Key.is(...keys) or Key.isNot(...keys) - nothing more.

## Installation

`npm install --save key.js`

## Usage

```javascript
import {Key, Keycodes} from 'key'
```

### Key
The primary class for keycode checking

#### `Key.is(ev, ...keycodes)`
Returns true if keycode is _any_ of the given keycodes

```javascript
if (Key.is(ev, Keycodes.DOWN, Keycodes.ESC)) {
  // do something
}
```

#### `Key.isNot(ev, ...keycodes)`
Returns true if keycode is _not any_ of the given keycodes

```javascript
if (Key.isNot(ev, Keycodes.ENTER, Keycodes.TAB)) {
  // do something
}
```

#### `Key.toCode(ev)`
Returns `(ev.keyCode || ev.which)`


### Keycodes
 
#### Switch example

```javascript
switch (Key.toCode(ev)) {
  case Keycodes.ENTER:
  case Keycodes.TAB:
    // do something
    break
  case Keycodes.LEFT:
  case Keycodes.UP:
  case Keycodes.RIGHT:
  case Keycodes.DOWN:
  {
    // do something
    break
  }
}
```


[npm-url]: https://www.npmjs.com/package/key.js
[npm-image]: https://img.shields.io/npm/v/key.js.svg
[travis-url]: https://travis-ci.org/alienfast/key.js
[travis-image]: https://img.shields.io/travis/alienfast/key.js.svg
