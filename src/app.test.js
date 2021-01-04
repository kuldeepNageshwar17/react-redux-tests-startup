import App from './App'
import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttribute, testStore } from '../utils/index'

const setUp = (initialState = {}) => {
  const store = testStore(initialState)
  const wrapper = shallow(<App store={store} />).childAt([0]).dive()
//   console.log(wrapper.debug())
  return wrapper
}

describe('App Component', () => {
  let wrapper
  beforeEach(() => {
    const initialState = {
        posts: [
        {
          title: 'Tittle',
          body: 'tittle body'
        },
        {
          title: 'Tittle',
          body: 'tittle body'
        },
        {
          title: 'Tittle',
          body: 'tittle body'
        },
        {
          title: 'Tittle',
          body: 'tittle body'
        }
      ]
    }
    wrapper=setUp(initialState)
  })

  it("should render without error",()=>{
      const component = findByTestAttribute(wrapper,"appComponent")
      expect(component.length).toBe(1);
  })
})
