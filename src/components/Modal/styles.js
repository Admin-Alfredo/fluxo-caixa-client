import styled from "styled-components";
import { ButtonOpacity } from "../Button2";

export const Container = styled.div`
  position: fixed;
  left: 0%;
  top: 0%;
  z-index: 999;
  width: 100%;
  height: 100%;
  visibility: hidden;
  background-color: rgba(0,0,0,.5);
  transition-delay:.1s;
  backdrop-filter: blur(2px);
  &.on{
    width: 100%;
    height: 100%;
    visibility: visible;
    z-index: 999;
  }
  & > div.wrapper-modal{
    opacity: 0;
    transform: translate(0px) scale(.8);
    z-index: 1000;
  }

   &.on > div.wrapper-modal{
    transition: all ease .4s;
    transition-delay:.1s;
    opacity: 1;
    transform: scale(1);
  }
`
export const WrapperModal = styled.div.attrs({ className: "wrapper-modal" })`
  width: ${props => props.width ? props.width : '570px'};
  background-color:${({ theme }) => theme.pane.backgroundSegundary};
  margin: 10px auto;
  border-radius: 5px;
  /* box-shadow:0px 2px 25px ${({ theme }) => theme.pane.backgroundPrimary}; */
  border: 1px solid ${({ theme }) => theme.pane.borderColorSegundary};
  
`
export const ModalHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.pane.borderColorSegundary};
`
export const ModalTitle = styled.h3``

export const ModalBtnClose = styled(ButtonOpacity)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-right: 2px;
  margin-top: 3px;
`
export const ModalBody = styled.div`
  position:relative;
  padding: 15px;
  overflow:auto;
  overflow-y: hidden;
  /* max-height:500px; */
  height: 500px;


`


