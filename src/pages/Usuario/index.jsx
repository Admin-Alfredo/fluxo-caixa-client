import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHead, CardHeadTitle, DataInfo, DataLabel, DataValue } from "../../components/Card/styles";
import TableOperacao from "../../components/TableOperacao";
import { Container } from "./styles";

function Usuario({ usuario, dispatch, operacoes }) {
  // const handlerSubmitForm = (e) => {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   const nome = e.target.nome.value
  //   const email = e.target.email.value
  //   const senha = e.target.senha.value
  //   const cSenha = e.target.cSenha.value
  //   const idEmpresa = e.target.idEmpresa.value

  //   if (senha !== cSenha) {
  //     return dispatch({ type: 'DISPATCH_MSG_ERROR', message: "senha incorreta." })
  //   }
  //   dispatch({
  //     type: "CREATE_NEW_USER",
  //     payload: { nome, email, senha, idEmpresa }
  //   })
  // }
  return (
    <Container>
      <Link to="/">Home</Link>
      <Card >
        <CardHead>
          <CardHeadTitle>Operações realizadas por {usuario.nome}</CardHeadTitle>
        </CardHead>
        <CardBody>
          <TableOperacao data={operacoes} />
        </CardBody>
      </Card>
      <Card >
        <CardHead>
          <CardHeadTitle>Informações do usuario</CardHeadTitle>
        </CardHead>
        <CardBody>
          <DataInfo>
            <DataLabel>nome</DataLabel>
            <DataValue> {usuario.nome}</DataValue>
          </DataInfo>
          <DataInfo>
            <DataLabel>email</DataLabel>
            <DataValue>{usuario.email}</DataValue>
          </DataInfo>
          <DataInfo>
            <DataLabel>empresa</DataLabel>
            <DataValue>{usuario.idEmpresa}</DataValue>
          </DataInfo>
          <DataInfo>
            <DataLabel>permissões</DataLabel>
            <DataValue>READ_AND_WRITE_OPERATIONS</DataValue>
            <DataValue>CRAETE_AND_DELETE_USERS</DataValue>
          </DataInfo>
        </CardBody>
      </Card>
    </Container>
  )
}
export default connect((state) => ({
  usuario: state.usuarioSelecionando,
  operacoes: state.operacoes
}))(Usuario)