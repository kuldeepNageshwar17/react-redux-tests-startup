

import checkPropTypes from "check-prop-types"
export const findByTestAttribute=(component,attr)=>{
    const wrapper=component.find(`[data-test='${attr}']`);      
return wrapper;
}
export const checkProps=(component,expProps)=>{
    const propsErr = checkPropTypes(
        component.propTypes,      
          expProps,
        'prop',
        component.name
      )
      return propsErr;
}