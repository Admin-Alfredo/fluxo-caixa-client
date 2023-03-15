import styled from "styled-components";
import Pane from "../Pane/index";

export const Container = styled(Pane)`
 width: 250px;
 height: 100vh;
 display: flex;
 flex-direction: column;

`
export const SideBarHeader = styled(Pane)`
 width: 250px;
 height: 50px;
 display: flex;
 justify-content: center;
 align-items: center;
`
export const WrapperAppName = styled.div`
  flex: 1;
  height: 50px;
  display :flex ;
  align-items: center;
  margin-left: 15px;
  & > span{
    font-family: Roboto;
  }
  `
export const SideBarBody = styled.div`
  width: 100%;
  flex: 1;
  `

export const SideBarMenu = styled.ul`
  width: 100%;
  margin-top: 80px;
`
export const SideBarMenuItem = styled.li`
  display: flex;
  flex-direction: column;

  & > a{
    padding: 15px 20px;
    /* text-align: center; */
    text-decoration: none;
    font-family: Roboto;
    color: #aaa;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    
  }
`
export const MenuItemLabel = styled.span`

`

