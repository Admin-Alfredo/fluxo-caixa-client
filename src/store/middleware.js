import createSagaMiddleware from '@redux-saga/core'
import { awaitUntil } from '../util'

export const messages = ({ fadeTime }) => (
  function ({ dispatch }) {
    return next => action => {
      if (action.type === "DISPATCH_MSG_ERROR") {
        awaitUntil(fadeTime).then(() => dispatch({ type: "CLEAR_MSG_ERROR" }))
      } else if (action.type === "DISPATCH_MSG_SUCCESS") {
        awaitUntil(fadeTime).then(() => dispatch({ type: "CLEAR_MSG_SUCCESS" }))
      }
      next(action)
    }
  }
)
export const sagas = createSagaMiddleware()