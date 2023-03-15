import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  position: relative;
  /* display: flex;' */
  flex-direction: column;
  height:460px;
  &::-webkit-scrollbar{
    width: 8px;
  }

  &::-webkit-scrollbar-thumb{
    background: #54545627;
    border-radius: 6px;
    transition:all ease .49s;
  }
  &::-webkit-scrollbar-thumb:hover{
    background: red;
    background: #545456de;
    border-radius: 6px;
  }
`
export const Table = styled.table`
  width: 100%;
  height: 100%;
`
export const TableHeading = styled.thead`
  height: 30px;
  /* position: fixed; */
  width: 100%;
`
export const TableHeadingItem = styled.th`
  padding: 10px 0px;
  border-bottom: 2px solid #888;
`
export const TableBody = styled.tbody`
/* display: table; */
/* flex-direction: column; */

`
export const TableRow = styled.tr`

  padding: 10px 0px;
  transition: ease .2s;
  &:hover{  
    background-color: ${(props) => props.theme.pane.borderColorPrimary};
    cursor: pointer;
  }
  
`
export const TableRowData = styled.td`
  max-height: 40px;
  text-align: center;
  
`
