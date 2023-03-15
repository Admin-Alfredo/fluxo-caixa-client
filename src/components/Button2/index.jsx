import React from 'react'
import {
  Container,
  ContainerOpacity
} from './styles'
export const Button = (props) => {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  )
}
export const ButtonOpacity = (props) => {
  return (
    <ContainerOpacity {...props}>
      {props.children}
    </ContainerOpacity>
  )
}
