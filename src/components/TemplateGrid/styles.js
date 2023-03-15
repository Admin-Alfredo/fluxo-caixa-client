import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 50px 50px 50px 50px 50px; 
  grid-column-gap: 30px;
  grid-row-gap: 10px;
` 
export const GridWrapperLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
` 
export const GridWrapperContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
` 