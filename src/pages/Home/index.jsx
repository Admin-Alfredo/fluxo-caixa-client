import { useState } from "react"
import { connect } from "react-redux"
import { Card, CardBody, CardHead, CardHeadTitle } from "../../components/Card/styles"
import { Container } from "../styles"
import { WrapperHome } from "./styles"
const Home = function () {

  return (
    <Container>
      <WrapperHome>
        <Card style={{width: 400}}>
          <CardHead>
            <CardHeadTitle>Saldo total da empresa</CardHeadTitle>
          </CardHead>
          <CardBody>
            <h1>500.000 Kz</h1>
          </CardBody>
        </Card>
        
      </WrapperHome>
    </Container >
  )
}
const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)