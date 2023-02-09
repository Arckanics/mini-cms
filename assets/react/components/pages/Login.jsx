import React, { Component } from 'react'
import Button from '../ui/Button'
import CSRFInput from '../ui/CSRFInput'
import TxtInput from '../ui/TxtInput'

class Login extends Component {
  render () {
    return (
      <form method="POST" id="login" className='rounded-lg bg-white color-dark'>
        <div className='form-title'>Connexion</div>
        <CSRFInput/>
        <div className='input-group-clear-outline'>
          <TxtInput type="text" label="Compte(Email)" id="email" placeholder="adresse email..."
            inputCls='input-txt' labelCls='label'
          />
          <TxtInput type="password" label="Mot de passe" id="password" placeholder="mot de passe..."
            inputCls='input-txt' labelCls='label'
          />
        </div>
        <Button
          divCls='p-2'
          btnCls='btn-primary'
        >Me Connecter</Button>
      </form>
    )
  }
}

export default Login