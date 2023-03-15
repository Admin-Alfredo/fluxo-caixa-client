import React, { useEffect, useRef, useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { connect } from 'react-redux'
import { DateSerialized } from '../../util'
import Button from '../Button'
import InputText from '../InputText'
import OptionsBox from '../OptionsBox'
import WrapperIcon from '../WrapperIcon'
import { Container, OptionsLeft, OptionsRight } from './styles'

function TopBar(props) {
  const { toggleModal, fillterOperacoesDiariaFn, operacoesDiaria } = props
  const [filterProps, setFilterProps] = useState({ tipo: 1, mensal: false })
  const form = useRef({})

  const handlerGetTotalEntrada = (e) => {

    if (e.data.value === "")
      return;

    const dateSerialized = new DateSerialized()
    dateSerialized.set(new Date(e.data.value.replace(/-/g, '/')))
    const filter = {
      date: dateSerialized.formatedDate,
      tipo: filterProps.tipo,
      mns: filterProps.mensal
    }
    fillterOperacoesDiariaFn(filter)
  }
  const handlerRequestXlsxFileOnData = function () {
    if (operacoesDiaria.length == 0) return;
    fetch('http://localhost:3000/api/operacao/_/request_xlsx_file', { 
      method: "POST",
      body: JSON.stringify(operacoesDiaria),
      headers: { 'Content-Type': 'application/json', 'accept': 'application/blob'}
    })
      .then((res) => res.blob())
      .then((blob) => {
        console.log(blob)

        const URLObject = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = URLObject
        a.download = `${Date.now() }.${blob.type.slice(12, blob.type.length)}`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      })
    console.log(operacoesDiaria)
  }
  const handlerChangeOption = (name, value) =>
    setFilterProps({ ...filterProps, [name]: value })


  useEffect(() => { handlerGetTotalEntrada(form.current) }, [filterProps])
  return (
    <Container borderBottom main {...props}>


      {/* <OptionsRight> */}
      <WrapperIcon
        onClick={() => toggleModal()}
        style={{
          width: 40,
          height: 40,
          marginLeft: 15,
          cursor: 'pointer'
        }}>
        <img src='/imagens/fluxo_caixa_nova.png' />
      </WrapperIcon>
      <div style={{}}>
        <form ref={form} style={{ display: 'flex', alignItems: 'center' }}>
          <InputText type="date" name="data" onChange={() => handlerGetTotalEntrada(form.current)} />
          <div style={{ margin: '0 10px' }}>
            <OptionsBox
              changeOption={handlerChangeOption}
              name="tipo"
              options={[
                { value: "0", label: "saida", },
                { value: "1", label: "entrada", active: true },
                { value: "2", label: "todos" },
              ]} />
          </div>
          <div style={{ margin: '0 10px' }}>
            <OptionsBox
              changeOption={handlerChangeOption}
              name="mensal"
              options={[{ value: false, label: "mensal" }]} />
          </div>
          <div style={{ margin: '0 10px' }}>
            <button
              type="button"
              title='baixar planilha'
              onClick={handlerRequestXlsxFileOnData}
              name="mensal"
              options={[{ value: false, label: "mensal" }]} >
              <WrapperIcon>
                <FaDownload />
              </WrapperIcon>
            </button>
          </div>
        </form>
      </div>

      {/* </OptionsRight> */}
      {/* <OptionsLeft> */}
      {/* </OptionsLeft> */}
    </Container>
  )
}

const mapStateToProps = (state) => ({
  modalIsOpen: state.modalOperacaoIsOpen,
  operacoesDiaria: state.operacoesDiaria
})

const mapDispatchToProps = (dispatch) => ({
  toggleModalFn: () => dispatch({ type: 'TOGGLE_MODAL_OPERACAO' }),
  createNewOperacaoFn: (operacao) => dispatch({ type: 'CREATE_NEW_OPERACAO', payload: operacao }),
  fillterOperacoesDiariaFn: (data) => dispatch({ type: "FILTER_OPERACOES_DIARIA", payload: data }),
  toggleModal: () => dispatch({ type: 'TOGGLE_MODAL_OPERACAO' })
})
export default connect(
  mapStateToProps,
  mapDispatchToProps)(TopBar)
