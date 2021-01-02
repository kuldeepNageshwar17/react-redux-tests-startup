/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttribute } from '../../../utils'
import Headline from '.'

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />)
  return component;
}
describe('headline component', () => {
    let wrapper

  describe('have props', () => {

    beforeEach(() => {
      const props = {
        header: 'heading',
        desc: 'description'
      }
      wrapper = setup(props)
    })
    it('render without error', () => {
      const component = findByTestAttribute(wrapper, 'headlineWrapper')
      expect(component.length).toBe(1)
    })
    it('render a h1', () => {
        const component = findByTestAttribute(wrapper, 'heading')       
        expect(component.length).toBe(1)
      })
      it('render a desc', () => {
        const component = findByTestAttribute(wrapper, 'desc')       
        expect(component.length).toBe(1)
      })
  })
  describe("headline compoenent with No props",()=>{
    beforeEach(() => {

        wrapper = setup();
      })
      it("should not render",()=>{
        const component = findByTestAttribute(wrapper, 'headlineWrapper')
        expect(component.length).toBe(0)
      })
  })
})
