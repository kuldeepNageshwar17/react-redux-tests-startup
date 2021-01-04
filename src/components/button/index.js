import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'

function SharedButton ({ buttonText, emitEvent }) {
  const handleSubmit = () => {
    if (emitEvent) {
      emitEvent()
    }
  }
  return (
    <button onClick={handleSubmit} data-test='buttonComponent'>
      {buttonText}
    </button>
  )
}
SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
}

export default SharedButton
