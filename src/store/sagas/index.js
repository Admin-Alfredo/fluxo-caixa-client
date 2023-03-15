import { call, fork, put, takeLatest, all } from 'redux-saga/effects'
import * as Api from './Api'

function* loadUsers() {
  console.log("LOAD_USERS....")
  try {
    const users = yield call(Api.getUseres)
    yield put({ type: "FETCH_USERS_SUCCESS", payload: users })
  } catch (err) {
    yield put({ type: 'DISPATCH_MSG_ERROR', payload: { message: err.message } })
  }
}
function* loadOperacoes() {
  try {
    const { operacoes } = yield call(Api.getOperacoes)
    console.log("LOAD_OPERACOES....", operacoes)
    yield put({ type: "FETCH_OPERACOES_SUCCESS", payload: { operacoes } })
  } catch (err) {
    yield put({ type: 'DISPATCH_MSG_ERROR', payload: { message: err.message } })
  }
}
function* createUser(action) {
  try {
    const result = yield call(Api.createUser, action.payload)
    const { usuario } = yield call(Api.getOneUser, result.usuario.link)
    console.log(usuario)
    yield put({ type: "ADD_NEW_USER", payload: usuario })
  } catch (err) {
    yield put({ type: "DISPATCH_MSG_ERROR", payload: { message: err.message } })
  }
}
function* createOperacao(action) {
  try {
    const result = yield call(Api.createOperacao, action.payload)
    const { operacao } = yield call(Api.getOneOperacao, result.operacao.link)
    console.log(operacao)
    yield put({ type: "ADD_NEW_OPERACAO", payload: { operacao } })
  } catch (err) {
    yield put({ type: "DISPATCH_MSG_ERROR", payload: { message: err.message } })
  } 
}

function* login(action) {
  console.log(action)
  try {
    const payload = yield call(Api.loginUser, action.payload.data)
    const { usuario } = yield call(Api.getOneUser, payload.id)

    yield put({ type: "ADD_USER_SELECTED", payload: usuario })
    console.log(usuario)
    action.payload.setToken(true)
    yield put({ type: "DISPATCH_MSG_SUCCESS", payload: { message: `${usuario.nome} login succefull` } })
  } catch (err) {
    yield put({ type: "DISPATCH_MSG_ERROR", payload: { message: err.message } })
  }
}

function* filterOp(action) {
  console.log("payload ", action)
  try {
    const data = yield call(Api.getDiarioOp, action.payload)
    yield put({ type:'ADD_OPERACAO_DIARIA', payload: data})
    
  } catch (error) {
    console.log(error)
  }
}

function* rootSaga() {
  yield all([
    fork(loadUsers),
    fork(loadOperacoes),
    takeLatest('CREATE_NEW_USER', createUser),
    takeLatest('CREATE_NEW_OPERACAO', createOperacao),
    takeLatest('LOGIN_USER', login),
    takeLatest('FILTER_OPERACOES_DIARIA', filterOp)
  ])
}
export default rootSaga