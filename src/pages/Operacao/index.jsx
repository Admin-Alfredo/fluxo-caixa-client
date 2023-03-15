import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Selector from '../../components/Selector'
import SearchMenu from '../../components/SearchMenu'
import TableOperacao from '../../components/TableOperacao'
import { Grid, GridWrapperContent, GridWrapperLabel } from '../../components/TemplateGrid/styles'
import TextArea from '../../components/TextArea'
import InputText from '../../components/inputText'
import { DateSerialized } from '../../util'
import { Container, PaneEditionOp, PaneEditionOpBody, PaneEditionOpHeading, PaneEditionOpHeadOptions, PaneEditionOpHeadTitle, PaneEdOpField, PaneEdOpLabel, PaneEdOpValue } from './styles'
import { ButtonOpacity } from '../../components/Button2'
import { FaTimes } from 'react-icons/fa'
function Operacao(
  { operacoes,
    operacoesDiaria,
    toggleModalFn,
    modalIsOpen,
    createNewOperacaoFn,
    fillterOperacoesDiariaFn,
    operacaoSelecionada
  }) {
  console.log(operacoes)
  const [opEdIsOpen, setOpEdIsOpen] = useState(true)
  const [tipoDeOperacao, setTipoDeOperacao] = useState(true)
  const handlerSubmitFormCreateOperacao = (e) => {
    e.preventDefault()
    const forma_de_pagamento = e.target.forma_de_pagamento.value
    const tipo = e.target.tipo.value
    const origem_destino = e.target.origem_destino.value
    const valor = Number(e.target.valor.value)
    const descricao = e.target.descricao.value

    const operacao = {
      forma_de_pagamento,
      tipo,
      origem_destino,
      valor,
      descricao
    }
    createNewOperacaoFn(operacao)
  }

  return (
    <div style={{ width: '100%', height: 'calc(100vh - 50px)' }}>
      <TableOperacao data={operacoesDiaria} />

      <div style={{ width: '100%',  overflow: 'auto', height: '100%' }}>
        <PaneEditionOpHeading>
          <PaneEditionOpHeadTitle>
            <h3>operação selecionado</h3>
          </PaneEditionOpHeadTitle>
          <PaneEditionOpHeadOptions >
            <ButtonOpacity style={{ marginRight: '5px' }} onClick={() => setOpEdIsOpen(!opEdIsOpen)}><FaTimes /></ButtonOpacity>
          </PaneEditionOpHeadOptions>
        </PaneEditionOpHeading>
        <PaneEditionOpBody>
          <PaneEdOpField>
            <PaneEdOpLabel>Tipo :</PaneEdOpLabel>
            <PaneEdOpValue>
              {operacaoSelecionada.tipo ? 'entrada' : 'saida'}
            </PaneEdOpValue>
          </PaneEdOpField>

          <PaneEdOpField>
            <PaneEdOpLabel>Valor:</PaneEdOpLabel>
            <PaneEdOpValue>
              {operacaoSelecionada.valor}
            </PaneEdOpValue>
          </PaneEdOpField>

          <PaneEdOpField>
            <PaneEdOpLabel>Forma de Pagamento :</PaneEdOpLabel>
            <PaneEdOpValue>
              {operacaoSelecionada.forma_de_pagamento}
            </PaneEdOpValue>
          </PaneEdOpField>

          <PaneEdOpField>
            <PaneEdOpLabel>Origem/Destino :</PaneEdOpLabel>
            <PaneEdOpValue>
              {operacaoSelecionada.origem_destino}
            </PaneEdOpValue>
          </PaneEdOpField>

          <PaneEdOpField>
            <PaneEdOpLabel>Data :</PaneEdOpLabel>
            <PaneEdOpValue>
              {operacaoSelecionada.data}
            </PaneEdOpValue>
          </PaneEdOpField>

          <PaneEdOpField>
            <PaneEdOpLabel>Descrição :</PaneEdOpLabel>
            <PaneEdOpValue>
              {operacaoSelecionada.descricao}
            </PaneEdOpValue>
          </PaneEdOpField>

        </PaneEditionOpBody>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return ({
    modalIsOpen: state.modalOperacaoIsOpen,
    usuarios: state.usuarios,
    usuario: state.usuarioSelecionando,
    operacoes: state.operacoes,
    operacoesDiaria: state.operacoesDiaria,
    operacaoSelecionada: state.operacaoSelecionada
  })
}
const mapDispatchToProps = (dispatch) => ({
  toggleModalFn: () => dispatch({ type: 'TOGGLE_MODAL_OPERACAO' }),
  createNewOperacaoFn: (operacao) => dispatch({ type: 'CREATE_NEW_OPERACAO', payload: operacao }),
  fillterOperacoesDiariaFn: (data) => dispatch({ type: "FILTER_OPERACOES_DIARIA", payload: data })
})

export default connect(mapStateToProps, mapDispatchToProps)(Operacao)
{/* <div style={{ flex:1, overflow: 'auto', height: '100%', width: '100%'}}>
        <h3>operaçao diária</h3>
        <div style={{ minWidth: 300, maxWidth: 600 }}>
          <form onSubmit={handlerGetTotalEntrada}>

            <div style={{ display: 'flex' }}>
              <InputText type="date" name="data" style={{ height: 25, borderRadius: 2, fontSize: 16 }} />
              <div style={{ display: 'flex', alignItems: 'center', height: 25, margin: '0 15px' }}>
                <label for="tipo_entrada_1" style={{ marginLeft: 10 }}>entrada&nbsp;&nbsp;</label>
                <InputText id="tipo_entrada_1" type="radio" checked name="tipo" value="1" style={{ height: 15 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '0 15px' }}>
                <label for="tipo_entrada_0" style={{ marginLeft: 10 }}>saida&nbsp;&nbsp;</label>
                <InputText id="tipo_entrada_0" type="radio" name="tipo" value="0" style={{ height: 15 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '0 15px' }}>
                <label for="tipo_entrada_2" style={{ marginLeft: 10 }}>todos&nbsp;&nbsp;</label>
                <InputText id="tipo_entrada_2" type="radio" name="tipo" value="2" style={{ height: 15 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '0 15px' }}>
                <label for="tipo_entrada_2" style={{ marginLeft: 15 }}>Mensal&nbsp;&nbsp;</label>
                <InputText id="tipo_entrada_2" type="checkbox" name="mensal" value="2" style={{ height: 15 }} />
              </div>
            </div>
            <Button type="submit">get total</Button>
          </form>
        </div>
        {operacoesDiaria.lenght !== 0 ? <TableOperacao data={operacoesDiaria} /> : false}
        {/* <hr /> */}
      //   <h3>Todas as operacoes</h3>
      //   <TableOperacao data={operacoes} />
      //   <Modal
      //     width="60%"
      //     title="Nova operação"
      //     onClickBtnClose={() => toggleModalFn()}
      //     onClickOverlap={() => toggleModalFn()}
      //     isOpen={modalIsOpen}>
      //     <>
      //       <form onSubmit={handlerSubmitFormCreateOperacao}>
      //         <Grid>
      //           <GridWrapperLabel >
      //             <label> forma de pagamento</label>
      //           </GridWrapperLabel>
      //           <GridWrapperContent >
      //             <Selector
      //               name="forma_de_pagamento"
      //               options={[
      //                 { label: "transferência" },
      //                 { label: "dinheiro", selected: true },
      //                 { label: "depósito" },
      //               ]}

      //             />
      //           </GridWrapperContent>

      //           <GridWrapperLabel >
      //             <label>tipo</label>
      //           </GridWrapperLabel>
      //           <GridWrapperContent>
      //             <Selector
      //               name="tipo"
      //               changestateoptions={(target) => setTipoDeOperacao(eval(target.value))}
      //               options={[
      //                 { value: true, label: "entrada", selected: true },
      //                 { value: false, label: "saida" },
      //               ]} />
      //           </GridWrapperContent>

      //           <GridWrapperLabel>
      //             <label>origem/destino</label>
      //           </GridWrapperLabel>
      //           <GridWrapperContent>
      //             <SearchMenu
      //               name="origem_destino"
      //               options={[
      //                 { value: 1, label: "Zenite", selected: true },
      //                 { value: 1, label: "DotSoluction" },
      //                 { value: 1, label: "OLXTecnology" },
      //               ]} />
      //           </GridWrapperContent>

      //           <GridWrapperLabel>
      //             <label>valor</label>
      //           </GridWrapperLabel>
      //           <GridWrapperContent>
      //             <InputText
      //               name="valor"
      //               type="number"
      //               style={{ width: 100, height: 30, borderRadius: 2, fontSize: 16 }} />
      //           </GridWrapperContent>

      //           <GridWrapperLabel >
      //             <label> decrição</label>
      //           </GridWrapperLabel>
      //           <GridWrapperContent >
      //             {tipoDeOperacao ?
      //               <TextArea name="descricao" style={{ borderRadius: 2, fontSize: 16 }} /> :
      //               <SearchMenu
      //                 name="descricao"
      //                 options={[
      //                   { value: 2, label: "Zenite", selected: true },
      //                   { value: 1, label: "DotSoluction" },
      //                   { value: 2, label: "OLXTecnology" },
      //                 ]} />}
      //           </GridWrapperContent>
      //         </Grid>

      //         <Button type="submit"> criar operação</Button>
      //       </form>
      //     </>
      //   </Modal>
      //   <Button onClick={() => toggleModalFn()}>Aplicar</Button>
      // </div> */}