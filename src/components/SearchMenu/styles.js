import styled, { createGlobalStyle } from "styled-components";
import WrapperIcon from "../WrapperIcon";

export const Container = styled.div`
  position: relative;
  display: inline-block;
  top:0%;
  left:0%;
  & select {
    display: none;
    visibility: hidden;
    /* height: 0;
    width: 0;
    margin: 0;
    padding: 0; */
  }
`
export const Overlap = styled.div`
  position: fixed;
  width:100%;
  height:100%;
  top:0%;
  left:0%;
  background-color: red;
`

export const WrapperSelectorVisible = styled.div`
  position: relative;
`

export const Trigger = styled.div`
  background-color: #333;
  display: inline-block;
  padding: 10px 10px;
  padding: 3px 5px 3px 5px;
  border-radius: 7px;
`

export const WrapperTrigger = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`


export const CaretIcon = styled(WrapperIcon)`
  height: 20px;
  width: 18px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colorPrimary};
`
export const Options = styled.ul`
  &.on{
    visibility: visible;
    z-index: 999;
  }
  z-index: 999;
  visibility: hidden;
  list-style: none;
  position: absolute;
  z-index: 9999;
  background-color: rgba(0,0,0,.7);
  backdrop-filter: blur(8px);
  top:0%;
  border-radius: 4px;
  padding: 3px;
  border: 1px solid ${({ theme }) => theme.pane.borderColorPrimary};

`

export const OptionItem = styled.li`
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  &:hover{
    background-color: ${({ theme }) => theme.colorPrimary};
  }
`
export const SelectedOption = styled.div`
  flex:1;
`




