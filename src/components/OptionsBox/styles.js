import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* margin: 0px -15px; */
  /* margin-top: 20px; */
  font-weight: 600;
  /* font-size: 18pt; */
  /* margin-bottom: 50px; */
`

export const Option = styled.button `
  border: none;
  outline: none;
  /* width: 100%; */
  /* height: 20px; */
  color: #020c20;
  /* border-radius: 30px; */
  background: #f3f3f3;
  /* line-height: 34px; */
  text-align: center;
  font-weight: 600;
  padding: 10px 5px;
  /* margin-bottom: 20px; */
  box-sizing: border-box;
  /* margin: 0 15px; */ 
  /* font-size: 20px; */
  cursor: pointer;
  transition: all ease .1s;
  &:last-child:not([data-single='true']){
    border-radius: 0px 7px 7px 0px;
  }
  &:first-child:not([data-single='true']){
    border-radius: 7px 0px 0px 7px;
  }
  &:hover {
    background: #f3f3f3;
    box-shadow: 0px 5px 15px #03102c;
  }

  &.active {
    background-color: #0a72c7;
    color: #fff;
  }

  &.active:hover {
    background-color: #0466b6;
  }
`



