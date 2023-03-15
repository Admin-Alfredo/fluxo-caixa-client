import React from 'react'
import { Container, Option } from './styles'


export default function OptionsBox(props) {
  const { changeOption, options } = props
  // Array.from(conSelect).map((selectElement) => {
  //   selectElement.addEventListener('click', (e) => {

  //   })
  // })

  const handlerClickOptionsBox = function (e) {
    // console.log(e.target, e.currentTarget)
    if (e.target.matches('button')) {
      const _options = Array.from(e.currentTarget.querySelectorAll('button[data-option]'))
      if (_options && _options.length == 1) {
        if (_options[0].dataset.active == 'true') {
          _options[0].classList.remove('active')
          _options[0].dataset.active = false
        } else {
          _options[0].classList.add('active')
          _options[0].dataset.active = true
        }
        _options[0].dataset.value = _options[0].dataset.active

        changeOption(
          e.target.dataset.name,
          _options[0].dataset.value == "true")
        return;
      }
      _options.forEach(opt => opt.classList.remove('active'))
      e.target.classList.add('active')
      changeOption && changeOption(
        e.target.dataset.name,
        e.target.dataset.value)
    }
  }
  return (
    <Container onClick={handlerClickOptionsBox}>
      {options && options.map((opt) => (
        <Option
          type="button"
          data-single={options.length == 1 ? 'true': 'false'}
          data-name={props.name}
          data-option
          data-active={opt.active ? true : false}
          className={opt.active ? 'active' : false}
          data-value={opt.value}>{opt.label}</Option>
      ))}
    </Container>
  )
}
