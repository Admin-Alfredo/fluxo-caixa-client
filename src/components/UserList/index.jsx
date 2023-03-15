import { connect } from "react-redux"

const UsuerList = ({ usuario }) => {
  return (
    <div>
      <h3>usuario selecionado </h3>
      <hr />
      <strong>{usuario.nome}</strong>
      <br />
      <small>{usuario.email}</small>
      <hr />
    </div>
  )
}

export default connect(state => ({
  usuario: state.usuarioSelecionando
}))(UsuerList)