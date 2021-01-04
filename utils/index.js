import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux'
import RootReducer from '../src/reducers'
import { middleware } from '../src/createStore'

export const findByTestAttribute = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}
export const checkProps = (component, expProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expProps,
    'prop',
    component.name
  )
  return propsErr
}
export const testStore=(initialState)=>{
  const createStoreWithMiddleware=applyMiddleware(...middleware)(createStore)
  return createStoreWithMiddleware(RootReducer)
}