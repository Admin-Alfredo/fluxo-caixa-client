import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa'

import {
  Container,
  WrapperModal,
  ModalHead,
  ModalBody,
  ModalTitle,
  ModalBtnClose

} from './styles'
export default function Modal(props) {
  const [visibleState, setVisibleSate] = useState(false)
  const modalDOM = useRef(null)
  useLayoutEffect(() => {
    const modalBody = modalDOM.current?.querySelector('div:last-child')

    const modalDimensions = modalBody?.getBoundingClientRect()
    
    const modalRealHeight = modalDimensions.height / .8
    modalBody.style.maxHeight = (
      modalRealHeight > window.screen.height ?
        (window.screen.height - 300) + 'px' : 'auto')

  }, [props.children])

  useEffect(() => setVisibleSate(props.isOpen), [props.isOpen])

  return (
    <Container
      data-overlap
      className={visibleState && 'on'}
      onClick={(e) => {
        const handlerClickOverlap = props.onClickOverlap ? props.onClickOverlap : null
        if (handlerClickOverlap && e.target.getAttribute('data-overlap')) {
          return handlerClickOverlap(e)
        }
      }}>
      <WrapperModal ref={modalDOM} width={props.width}>
        <ModalHead>
          <ModalTitle >
            {props.title}
          </ModalTitle>
          <ModalBtnClose onClick={props.onClickBtnClose ? props.onClickBtnClose : () => { }}>
            <FaTimes />
          </ModalBtnClose>
        </ModalHead>
        <ModalBody>
          {props.children}
        </ModalBody>  
      </WrapperModal>
    </Container>
  )
}
