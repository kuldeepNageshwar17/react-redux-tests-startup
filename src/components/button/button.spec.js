import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttribute, checkProps } from '../../../utils'
import SharedButton from '.'

describe('sharedButton Component test', () => {
  describe('checking proptypes', () => {
    it('should not throught a warning', () => {
      const expProps = {
        buttonText: 'this is a button',
        emitEvent: () => {}
      }
      const propError = checkProps(SharedButton, expProps)
      expect(propError).toBeUndefined()
    })
  })
  describe('it renders', () => {
    let wrapper
    beforeEach(() => {
      const expProp = { buttonText: 'this is a button', emitEvent: () => {} }
      wrapper = shallow(<SharedButton {...expProp} />)

    })
    it("render a buttom",()=>{
    const button= findByTestAttribute(wrapper,"buttonComponent");
    expect(button.length).toBe(1)
    })

  })
})
