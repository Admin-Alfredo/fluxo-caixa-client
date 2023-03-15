import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 50px;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`
export const WrapperMain = styled.div`
 width: 495px;
 display: flex;
 flex-direction: column;
 padding: 20px;
 border-radius: 5px;
 border:${props => `${props.theme.pane.borderWidth} solid ${props.theme.pane.borderColorPrimary}`};
`
export const WrapperInfo = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-bottom: 25px;
`
export const Title = styled.h1`
 font-family: Roboto-Light;
 font-size: 2rem;
 margin: 15px 0px;
`
export const SubTitle = styled.h1`
 font-family: Roboto-Light;
 font-size: 1.4rem;
 margin: 15px 0px;
`

export const FormLogin = styled.form`
  width: 100%;
`