import React from 'react'
import { Link } from 'react-router-dom'
import { BiCube,  BsCoin, BiBusSchool} from 'react-icons/all'
import { FaUser} from 'react-icons/fa'

import WrapperIcon from '../WrapperIcon'
import {
  Container,
  SideBarHeader,
  WrapperAppName,
  SideBarBody,
  SideBarMenu,
  SideBarMenuItem,
  MenuItemLabel
} from './styles'


export default function SideBar() {
  return (
    <Container borderRight main>
      <SideBarHeader main>
        <WrapperIcon style={{ width: 40, height: 40, marginLeft: 15 }}>
          <img src='/imagens/fluxo_caixa_registros.png' />
        </WrapperIcon>
        <WrapperAppName>
          <span>DotSoluction Caixa</span>
        </WrapperAppName>
      </SideBarHeader>
      <SideBarBody>
      {/* <BiCube/>, <BiDollar/>, <BiCoin/>, </> */}
        <SideBarMenu>
          <SideBarMenuItem>
            <Link to="/">
              <WrapperIcon style={{ marginRight: 20 }}>
                <BiCube size={30} />
              </WrapperIcon>
              <MenuItemLabel>Minha empresa</MenuItemLabel>
            </Link>
          </SideBarMenuItem>
          <SideBarMenuItem>
            <Link to="/operacao">
              <WrapperIcon style={{ marginRight: 20 }}>
                <BsCoin size={30} />
              </WrapperIcon>
              <MenuItemLabel>Transações</MenuItemLabel>
            </Link>
          </SideBarMenuItem>
          <SideBarMenuItem>
            <Link to="/usuario">
              <WrapperIcon style={{ marginRight: 20 }}>
                <FaUser size={30} />
              </WrapperIcon>
              <MenuItemLabel>Usuário</MenuItemLabel>
            </Link>
          </SideBarMenuItem>
        </SideBarMenu>
      </SideBarBody>
    </Container>
  )
}
