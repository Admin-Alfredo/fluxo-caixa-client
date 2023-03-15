import styled from "styled-components";

export const Container = styled.button`
  border:0;
  outline: 0;
  background-color:#469CFB;
  color:#ffffff;
  font-size: 16pt;
  font-family: Roboto-Light;
  /* padding: 5px 10px; */
  height:42px;
  width: 42px;
  /* margin: 5px 0px; */
  text-shadow: 1px 1px 0px #2686EF;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: outline cubic-bezier(0.6, -0.28, 0.735, 0.045) .01s;
  &:focus{
    border: 2px solid #469CFB;
    outline-width: 3px;
    outline-offset: 0px;
    outline-style: solid;
    outline-color: #CADDF2;
  }
`
export const ContainerOpacity = styled(Container)`
  color: #777;
  background: transparent;
  text-shadow: 0px 0px 0px transparent;
`