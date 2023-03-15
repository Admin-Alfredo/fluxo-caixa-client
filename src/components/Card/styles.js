import styled from "styled-components"

export const Card = styled.div`

border: ${({ theme }) => theme.pane.borderWidth} solid ${({ theme }) => theme.pane.borderColorPrimary};
`
export const CardHead = styled.div`
  border-bottom: ${({ theme }) => theme.pane.borderWidth} solid ${({ theme }) => theme.pane.borderColorPrimary};
  padding: 10px 15px;
`
export const CardHeadTitle = styled.h2`

`
export const CardBody = styled.div`
  padding: 15px;  
`
export const DataInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const DataLabel = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`
export const DataValue = styled.div`

`