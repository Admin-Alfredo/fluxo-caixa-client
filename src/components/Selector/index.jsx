import React, { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { MdArrowBack, MdCheck } from 'react-icons/md'
import WrapperIcon from '../WrapperIcon'
import {
  Container,
  Overlap,
  GlobalStylesSelecteorItem,
  OptionItem,
  Options,
  SelectedOption,
  Trigger,
  CaretIcon,
  WrapperSelectorVisible,
  WrapperTrigger
} from './styles'

export default function Selector(props) {
  const DOM = useRef()
  const DOMCustomOptions = useRef()
  const DOMTrigger = useRef()


  const [optionsItems, setOptionItems] = useState([])
  const [visibleState, setVisibleState] = useState(false)
  const [triggerWidth, setTriggerWidth] = useState('10px')

  useEffect(() => {

    const { current: selector } = DOM
    const { current: trigger } = DOMTrigger

    uptdateCustomSelector()

  }, [])
  const uptdateCustomSelector = () => setOptionItems([...DOM.current.options])
  const handlerChangeOptionItem = (e) => {
    const { current: selector } = DOM
    for (let op of optionsItems) {
      if (op.textContent == e.currentTarget.getAttribute('data-text')) {
        op.selected = true
        uptdateCustomSelector()
      }
    }
    props.changestateoptions && props.changestateoptions(selector)
    setVisibleState(!visibleState)
  }
  return (
    <Container>
      {/* <Overlap ref={DOMOverlap} /> */}
      <GlobalStylesSelecteorItem />
      <select ref={DOM} onChange={(e) => {
        uptdateCustomSelector()

      }} {...props}>

        {props.options && props.options.map((option, key) => (
          <>
            <option key={key} selected={option.selected ? true : false} value={option.value}>{option.label}</option>
          </>
        ))}
      </select>
      <WrapperSelectorVisible>
        <Trigger
          onClick={() => setVisibleState(!visibleState)}
          ref={DOMTrigger}
        >

          <WrapperTrigger>
            {optionsItems?.map((option, key) => (
              option.selected ?
                <SelectedOption key={key}>{option.textContent}</SelectedOption> : false
            ))}
            <CaretIcon>
              <FaChevronDown />
            </CaretIcon>
          </WrapperTrigger>
        </Trigger>
        <Options className={visibleState && 'on'} ref={DOMCustomOptions}>
          {optionsItems?.map((option) => (
            <OptionItem
              onClick={handlerChangeOptionItem}
              data-text={option.textContent}>
              <WrapperIcon>
                {option.selected && <MdCheck size={20} />}
              </WrapperIcon>
              <span>
                {option.textContent}
              </span>
            </OptionItem>
          ))}
          {/* <OptionItem></OptionItem> */}
        </Options>
      </WrapperSelectorVisible>
    </Container>
  )
}
