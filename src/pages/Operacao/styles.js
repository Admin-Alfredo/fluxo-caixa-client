import styled from "styled-components";
import Pane from '../../components/Pane'
export const Container = styled.div`
  display:flex ;
  flex-direction: column;
  position: relative;
`

export const PaneEditionOp = styled(Pane)`
  width: 100%;
  /* height: 300px; */
  /* position: fixed; */
  /* bottom: 0; */
`
export const PaneEditionOpHeading = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${props => `${props.theme.pane.borderWidth} solid ${props.theme.pane.borderColorPrimary}`};
`
export const   PaneEditionOpHeadTitle = styled.div`

`
export const   PaneEditionOpHeadOptions = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`
export const PaneEditionOpBody = styled.div`

`

export const PaneEdOpField = styled.div`
  display: flex;
  margin: 10px 0px ;
`

export const PaneEdOpLabel = styled.label`
  font-weight: 700;
  
`
export const PaneEdOpValue = styled.span`
margin-left: 15px;
`