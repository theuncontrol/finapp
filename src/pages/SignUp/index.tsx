import React, { useRef } from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import GoogleLogin from 'react-google-login'

import { Container, Form, SocialLogin, Google } from './styles'
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import Input from '../../components/FormInput'

interface FormData {
  email: string
  password: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const customStyle = [{ 'border-radius': '50px' }]

  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
  }

  const responseGoogle = (response: any) => {
    console.log(response)
  }
  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="Finapp" className="logo" />
      </div>
      <SocialLogin>
        <Google
          clientId="585209025507-rs48p9fkem5617aqe0b4eb8buepl6jkv.apps.googleusercontent.com"
          buttonText="Registrar com Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </SocialLogin>
      <div className="separator">
        <span>ou</span>
      </div>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input name="name" label="Nome Completo" />
        <Input name="email" label="E-mail" />
        <Input name="password" label="Senha" type="password" />
        <button type="submit">Registrar</button>
      </Form>
      <div className="link-box">
        <span>
          Ja possui conta? <Link to="/">Logar-se!</Link>
        </span>
      </div>
    </Container>
  )
}

export default SignUp
