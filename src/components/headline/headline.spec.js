/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttribute ,checkProps} from '../../../utils'
import checkPropTypes from 'check-prop-types'

import Headline from '.'

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />)
  return component
}
describe('headline component', () => {
  let wrapper

  describe('checking propTypes', () => {
    it('shoud not throught warning', () => {
      const extProp = {
        header: 'test header',
        desc: 'description ',
        tempArr: [
          {
            fName: 'test',
            lName: 'test',
            age: 10,
            email: 'email@email.com',
            onlineStatus: false
          }
        ]
      }
      const propsErr =checkProps(Headline,extProp)
      expect(propsErr).toBeUndefined()
    })
  })

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
  describe('headline compoenent with No props', () => {
    beforeEach(() => {
      wrapper = setup()
    })
    it('should not render', () => {
      const component = findByTestAttribute(wrapper, 'headlineWrapper')
      expect(component.length).toBe(0)
    })
  })
})
