import Key from '../js/key'
import Keycodes from '../js/keycodes'
import {expect}from 'chai'

// non-es6 for quick browser debugging of setup
describe('Key', () => {

  const ev = (keycode) => {
    return {keyCode: keycode}
  }

  const EV_ENTER = ev(Keycodes.ENTER)
  const EV_ESC = ev(Keycodes.ESC)
  describe('#toCode', () => {

    it('should match fixtures', () => {
      expect(Key.toCode(EV_ENTER)).to.equal(Keycodes.ENTER)
      expect(Key.toCode(EV_ESC)).to.equal(Keycodes.ESC)
    })


    it('should work in a switch', () => {
      let result = false
      switch (Key.toCode(EV_ENTER)) {
        case Keycodes.ENTER:
        case Keycodes.TAB:
          result = true
          break
        case Keycodes.LEFT:
        case Keycodes.UP:
        case Keycodes.RIGHT:
        case Keycodes.DOWN:
        {
          result = false
          break
        }
        default:
          result = false
      }

      expect(result).to.equal(true)
    })
  })


  describe('#is', () => {
    it('single value should work', () => {
      expect(Key.is(EV_ENTER, Keycodes.ENTER)).to.equal(true)
      expect(Key.is(EV_ESC, Keycodes.ENTER)).not.to.equal(true)
    })

    it('multi value should work', () => {
      expect(Key.is(EV_ENTER, Keycodes.ENTER, Keycodes.ESC)).to.equal(true)

      expect(Key.is(EV_ENTER, Keycodes.ESC)).not.to.equal(true)
      expect(Key.is(EV_ENTER, Keycodes.ESC, Keycodes.SPACE)).not.to.equal(true)
    })
  })

  describe('#isNot', () => {
    it('single value should work', () => {
      expect(Key.isNot(EV_ENTER, Keycodes.ESC)).to.equal(true)
      expect(Key.isNot(EV_ESC, Keycodes.ENTER)).to.equal(true)

      expect(Key.isNot(EV_ENTER, Keycodes.ENTER)).not.to.equal(true)
      expect(Key.isNot(EV_ESC, Keycodes.ESC)).not.to.equal(true)
    })

    it('multi value should work', () => {
      expect(Key.isNot(EV_ENTER, Keycodes.TAB, Keycodes.ESC)).to.equal(true)

      expect(Key.isNot(EV_ENTER, Keycodes.ENTER, Keycodes.ESC)).not.to.equal(true)
      expect(Key.isNot(EV_ENTER, Keycodes.ESC, Keycodes.ENTER)).not.to.equal(true)
    })
  })
})
