import React, { createElement, useEffect, useRef } from 'react'
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'
import {
  Container,
  Table,
  TableBody,
  TableHeading,
  TableHeadingItem,
  TableRow,
  TableRowData
} from './styles'
import { DateSerialized } from '../../util'
import { connect } from 'react-redux'

 function TableOperacao(props) {
  const { data, setOperacaoSelecionadaFn} = props


  const DOM = useRef()
  const dimensionsColumn = [7, 60, 100, 100, 100, 180, 40]
  useEffect(() => {
    const { current: container } = DOM
    // container.style.maxHeight = ((window.innerHeight - container.getBoundingClientRect().y) - 70) + 'px'
    // container.style.minHeight = ((window.innerHeight - container.getBoundingClientRect().y) - 70) + 'px'
  }, [])
  const handlerClickSelectorOp = function(op){
    console.log(op)
    setOperacaoSelecionadaFn(op)
  }
  const handlerEditFieldOp = function(e){
    console.log(e.target.textContent)
    let tmp = e.target.textContent
    e.target.innerText = ""
    const i = document.createElement('input')
    i.value = tmp
    e.target.appendChild(i)
  }
  return (
    <div>
      <Table>
        <TableHeading >
          <TableRow>
            <TableHeadingItem style={{ width: 7 }}>tipo</TableHeadingItem>
            <TableHeadingItem style={{ width: 60 }}>valor</TableHeadingItem>
            <TableHeadingItem style={{ width: 100 }}>numero de orderm</TableHeadingItem>
            <TableHeadingItem style={{ width: 100 }}>forma de pagamento</TableHeadingItem>
            <TableHeadingItem style={{ width: 100 }}>origem / destino</TableHeadingItem>
            <TableHeadingItem style={{ width: 100 }}>data</TableHeadingItem>
            <TableHeadingItem style={{ width: 180 }}>descrição</TableHeadingItem>
            <TableHeadingItem style={{ width: 40 }}>opções</TableHeadingItem>
          </TableRow>
        </TableHeading>
      </Table>
      <Container ref={DOM}>
        <Table >
          <TableBody>
            {[...data, ...data, ...data].map((operacao) => {
              const date = new Date(operacao.data)
              console.log(date.getDay())
              const dateSerialized = new DateSerialized()
              dateSerialized.set(`${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`)
              console.log("Month: ", dateSerialized.formatedDate)
              return (
                <TableRow onClick={() => handlerClickSelectorOp(operacao)}>
                  <TableRowData style={{ width: 7 }}>
                    {operacao.tipo ?
                      <MdArrowDownward color="#21ba05" size={25} /> :
                      <MdArrowUpward color="#f01616" size={25} />}
                  </TableRowData>
                  <TableRowData onDoubleClick={handlerEditFieldOp} style={{ width: 60 }}>{operacao.valor} kz</TableRowData>
                  <TableRowData style={{ width: 100 }}>{operacao.numero_de_ordem}</TableRowData>
                  <TableRowData style={{ width: 100 }}>{operacao.forma_de_pagamento}</TableRowData>
                  <TableRowData style={{ width: 100 }}>{operacao.origem_destino}</TableRowData>
                  <TableRowData style={{ width: 100 }}>{`${operacao.data}`}</TableRowData>
                  <TableRowData style={{ width: 180 }}>{operacao.descricao}</TableRowData>
                  <TableRowData style={{ width: 40 }}><FaTrash /></TableRowData>
                </TableRow>
              )
            })}

          </TableBody>
        </Table>
      </Container>
    </div>
  )
}
export default connect((state) => ({
  operacaoSelecionada: state.operacaoSelecionada
}), (dispatch) => ({
  setOperacaoSelecionadaFn: (payload) => dispatch({ type: 'SET_OPERACAO_SELECIONADA', payload})
}))(TableOperacao)