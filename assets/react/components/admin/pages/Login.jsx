import React, { Component } from 'react'
import Button from '../ui/Button'
import TxtInput from '../ui/TxtInput'
import { getToken } from '../Functions/Security'
import { useNavigate } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.ajax = props.ajax
    this.state = {
      email: null,
      password: null,
      _token: getToken(),
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(e) {
    this.setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  handleSubmit(e) {
    e.preventDefault()
    const {ajax} = this
    this.state
    ajax.post('/login', {...this.state})
      .then(res => {
        const nav = useNavigate()
        nav('/mini-admin'+res.url)
      })
  }

  render () {
    const {email, password} = this.state
    const {handleChange, handleSubmit} = this
    return (
      <form method="POST" id="login" className='rounded-lg bg-white color-dark' onSubmit={handleSubmit}>
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