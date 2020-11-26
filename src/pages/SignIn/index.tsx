import React, { useRef } from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import GoogleLogin from 'react-google-login'

import Input from '../../components/FormInput'

import { Container, Form, SocialLogin } from './styles'
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

interface FormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

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

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" label="E-mail" type="email" />
        <Input name="password" label="Password" type="password" />

        <button type="submit">Entrar</button>
      </Form>

      <div className="separator">
        <span>ou</span>
      </div>

      <SocialLogin>
        <GoogleLogin
          clientId="585209025507-rs48p9fkem5617aqe0b4eb8buepl6jkv.apps.googleusercontent.com"
          buttonText="Continuar com o Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </SocialLogin>

      <div className="link-box">
        <span>
          Ainda não possui conta? <Link to="/signup">Registre-se!</Link>
        </span>
      </div>
    </Container>
  )
}

export default SignIn
