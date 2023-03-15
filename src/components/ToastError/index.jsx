import React from 'react'
import { connect } from 'react-redux'

function ToastError({ messages }) {
  return (
    <div>{messages.map(msg => <div style={{
      color: "red",
      position: 'fixed',
      left: '50%',
      transform: 'translateX(-50%)',
      top: 5
    }}> {msg}</div>)}</div>
  )
}

export default connect(state => ({ messages: state.messageError }))(ToastError)