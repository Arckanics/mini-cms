import React, { Component } from 'react'
import Button from '../ui/Button'
import CSRFInput from '../ui/CSRFInput'
import TxtInput from '../ui/TxtInput'
import fx from '../Functions/Security'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null,
      token: fx.getToken()
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e) {
    console.log(e.target.name)
    this.setState(state => ({
      [e.target.name]: e.target.value
    }))
  }

  render () {
    const {email, password} = this.state
    const {handleChange} = this
    return (
      <form method="POST" id="login" className='rounded-lg bg-white color-dark'>
        <div className='form-title'>Connexion</div>
        <div className='input-group-clear-outline'>
          <TxtInput type="text" label="Compte(Email)" id="email" value={email} placeholder="adresse email..."
            inputCls='input-txt' labelCls='label' onChange={handleChange}
          />
          <TxtInput type="password" label="Mot de passe" id="password" value={password} placeholder="mot de passe..."
            inputCls='input-txt' labelCls='label' onChange={handleChange}
          />
        </div>
        <Button
          divCls='pt-1 p-4'
          btnCls='btn-primary'
        >Me Connecter</Button>
      </form>
    )
  }
}

export default Login