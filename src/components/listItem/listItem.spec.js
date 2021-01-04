import React from 'react'
import { shallow } from 'enzyme'
import { checkProps, findByTestAttribute } from '../../../utils'
import ListItem from '.'

describe('ListItem tests', () => {
  describe('checking proptypes', () => {
    it('should render without warning', () => {
      const expProps = { title: 'this List Item', desc: 'description of prop' }
      expect(checkProps(ListItem,expProps)).toBeUndefined();
    })
  })
    let wrapper
    describe('render component', () => {
      beforeEach(() => {
        const expProps = { title: 'this List Item', desc: 'description of prop' }
        wrapper = shallow(<ListItem {...expProps} />)
      })
      it('render component', () => {
        var component = findByTestAttribute(wrapper, 'listItem')
        expect(component.length).toEqual(1)
      })
      it('render title', () => {
        var component = findByTestAttribute(wrapper, 'listTitle')
        expect(component.length).toEqual(1)
      })
      it('render desc', () => {
        var component = findByTestAttribute(wrapper, 'listDesc')
        expect(component.length).toEqual(1)
      })
    })
    describe('should NOT render', () => {
      beforeEach(() => {
          const expProps = {}
          wrapper = shallow(<ListItem {...expProps} />)
        })
        it('should not render component', () => {
          var component = findByTestAttribute(wrapper, 'listItem')
          expect(component.length).toEqual(0)
        })
    })
})
