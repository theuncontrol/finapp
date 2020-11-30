import React from 'react'
import User from '../../assets/images/UserIcon.svg'
import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <div className="separator"></div>
      <div className="img-box">
        <img src={User} alt="logo" />
      </div>
      <div className="resume">
        <h3>Total gasto</h3>
        <span>R$900,00</span>
      </div>
      <div className="resume">
        <button>Novo gasto</button>
      </div>
    </Container>
  )
}

export default Header
