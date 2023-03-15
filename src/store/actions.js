export const ADD_NEW_USER = function (state, action) {
  return {
    ...state,
    usuarios: [
      ...state.usuarios,
      action.payload.usuario
    ]
  }
}
export const ADD_USER_SELECTED = function (state, action) {
  return {
    ...state,
    usuarioSelecionando: action.payload
  }
}


export const FETCH_USERS_SUCCESS = function (state, action) {
  return {
    ...state,
    usuarios: [...action.payload.usuarios]
  }
}
export const FETCH_OPERACOES_SUCCESS = function (state, action) {
  return {
    ...state,
    operacoes: [...action.payload.operacoes]
  }
}


export const ADD_NEW_OPERACAO = function (state, action) {
  return {
    ...state,
    operacoes: [
      action.payload.operacao,
      ...state.operacoes
    ]
  }
}

export const DISPATCH_MSG_ERROR = function (state, action) {
  console.log("LOGIN_FAILED", action)

  return {
    ...state,
    messageError: [action.payload.message]
  }
}
export const DISPATCH_MSG_SUCCESS = function (state, action) {
  console.log("LOGIN_SUCCESS", action)

  return {
    ...state,
    messageSuccess: [action.payload.message]
  }
}
export const CLEAR_MSG_ERROR = function (state, action) {
  return {
    ...state,
    messageError: []
  }
}
export const CLEAR_MSG_SUCCESS = function (state, action) {
  return {
    ...state,
    messageSuccess: []
  }
}
export const TOGGLE_MODAL_OPERACAO = function (state, action) {
  return {
    ...state,
    modalOperacaoIsOpen: !state.modalOperacaoIsOpen
  }
}

export const ADD_OPERACAO_DIARIA = function (state, action) {
  return {
    ...state,
    operacoesDiaria: [...action.payload.operacoes]
  }
}
export const SET_OPERACAO_SELECIONADA = function (state, action) {
  console.log(state, action)
  return ({ ...state, operacaoSelecionada: action.payload })
}