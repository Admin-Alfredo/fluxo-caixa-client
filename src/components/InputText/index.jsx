import React from 'react'
import { Container } from './styles'

import WrapperIcon from '../WrapperIcon'
export default function InputText(props) {
  return (
    <Container >
      {props.Icon && <WrapperIcon style={{
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)'
      }}>
        <props.Icon size={25} color='#9a9a9a'/>
      </WrapperIcon>}
      <input style={{paddingLeft: props.Icon ? '40px' : 'auto'}} {...props} />
    </Container>
  )
}
