import React, { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { MdArrowBack, MdCheck } from 'react-icons/md'
import InputText from '../InputText'
import WrapperIcon from '../WrapperIcon'
import {
  Container,
  Overlap,
  OptionItem,
  Options,
  SelectedOption,
  Trigger,
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

    selector.style.display = 'none'
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
    props.changeStateOptions && props.changeStateOptions(selector)
    setVisibleState(!visibleState)
  }
  return (
    <Container>
      <select ref={DOM} onChange={() => uptdateCustomSelector()} {...props}>

        {props.options && props.options.map((option, key) => (
          <>  
            <option key={key} selected={option.selected ? true : false} value={option.value}>{option.label}</option>
          </>
        ))}
      </select>
      <WrapperSelectorVisible>
        <Trigger
          onClick={() => setVisibleState(!visibleState)}
          ref={DOMTrigger}>

          {/* <WrapperTrigger> */}
            {optionsItems?.map((option, key) => (
              option.selected ?
                <SelectedOption key={key}>{option.textContent}</SelectedOption> : false
            ))}
          {/* </WrapperTrigger> */}
        </Trigger>
        <Options className={visibleState && 'on'} ref={DOMCustomOptions}>
          <InputText style={{height: 20, borderRadius: 2, fontSize: 16}}/>
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
        </Options>
      </WrapperSelectorVisible>
    </Container>
  )
}
