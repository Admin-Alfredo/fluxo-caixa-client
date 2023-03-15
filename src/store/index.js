import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import rootSaga from './sagas'
import * as middleware from './middleware'
import * as Actions from './actions'
const INITIAL_STATE = {
  usuarioSelecionando: {},
  modalOperacaoIsOpen: false,
  messageError: [],
  operacoesDiaria: [],
  messageSuccess: [],
  usuarios: [],
  operacoes: [],
  operacaoSelecionada: { }
}

function reducer(state, action) {
  if(typeof Actions[action.type] !== "function")
    return state
    const result = Actions[action.type](state, action)
    console.log("REDUCER -->", result)
    return result
}



const store = createStore(
  reducer,
  INITIAL_STATE,
  compose(applyMiddleware(
    middleware.sagas,
    middleware.messages({ fadeTime: 5000 }))
  )
)
middleware.sagas.run(rootSaga)
export default store
