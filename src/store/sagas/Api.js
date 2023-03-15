export const getUseres = () => {
  return fetch('http://localhost:3000/api/usuario')
    .then(response => response.json())
}

export const createUser = (dataUser) => {
  return fetch('http://localhost:3000/api/usuario',
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(dataUser)
    })
    .then(response => response.json())
}
export const getOneUser = (payload) => {
  const url = typeof payload == 'number' ? `http://localhost:3000/api/usuario/${payload}` : payload;
  return fetch(url,
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    })
    .then(response => response.json())
}
export const createOperacao = (operacao) => {
  return fetch('http://localhost:3000/api/operacao',
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(operacao)
    })
    .then(response => response.json())
}
export const getOneOperacao = (payload) => {
  const url = typeof payload == 'number' ? `http://localhost:3000/api/operacao/${payload}` : payload;
  return fetch(url,
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    })
    .then(response => response.json())
}
export const getOperacoes = () => {
  return fetch('http://localhost:3000/api/operacao')
    .then(response => response.json())
}




export const loginUser = (data) => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`http://localhost:3000/api/login`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
    if (response.status != 200)
      return reject({ message: "ERROR REQUEST LOGIN" })

    const result = await response.json()
    resolve(result)
  })
}
export const getDiarioOp = (payload) => {
  console.log("API -> ", payload)
  return (fetch(`http://localhost:3000/api/operacao/_/diario?date=${payload.date}&tipo=${payload.tipo}${payload.mns ? '&mns' : ''}`,
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    }).then(response => response.json()))
}