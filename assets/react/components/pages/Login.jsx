import React from 'react'
import Button from '../ui/Button'
import CSRFInput from '../ui/CSRFInput'

const Login = () => {
  return (
    <form method="POST" id="login">
      <CSRFInput/>
      <Button>Connexion</Button>
    </form>
  )
}

export default Login