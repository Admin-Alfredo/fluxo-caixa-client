import { connect } from "react-redux"
import InputText from "../../components/inputText"
import Button from "../../components/Button"
import { MdEmail, MdLock } from 'react-icons/md'
import { Container, FormLogin, SubTitle, Title, WrapperMain, WrapperInfo } from "./styles"

function Login({ dispatch, setToken }) {

  const handlerSubmitLogin = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const email = e.target.email.value
    const senha = e.target.senha.value

    dispatch({ type: "LOGIN_USER", payload: { data: { email, senha }, setToken } })
    // dispatch({ type: "DISPATCH_MSG_ERROR", message: "ERRO AO FAZER LOGIN" })
  }
  return (
    <Container>
      <WrapperMain>

        <WrapperInfo>
          <img src="./imagens/fluxo_caixa_icon.png" alt="ERRO_AO_CARREGAR_IMAGE" width={150} height={150} />
          <Title>Fluxo de caixa</Title>
          <SubTitle>Registrando as minhas actividades financeira</SubTitle>
        </WrapperInfo>
        <FormLogin onSubmit={handlerSubmitLogin}>

          <InputText Icon={MdEmail} autoComplete="false" name="email" placeholder='ensire o seu email' />
          <br />
          <br />
          <InputText Icon={MdLock} name="senha" placeholder='ensire a sua senha' />
          <br />
          <Button type="submit" large style={{marginTop: 50}}> Login </Button>
        </FormLogin>
      </WrapperMain>
    </Container>
  )
}
export default connect(state => ({}))(Login)