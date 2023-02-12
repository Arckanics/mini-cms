import React, { useState } from 'react'
import Button from '../ui/Button'
import TxtInput from '../ui/TxtInput'
import { getToken } from '../Functions/Security'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const nav = useNavigate()
  const ajax = props.ajax
  const [state, setState] = useState({
    email: null,
    password: null,
    _token: getToken(),
  })

  const [isError, setIsError] = useState(false)

  const handleChange = (e) => {
    setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    ajax.post('/login', { ...state })
      .then(res => {
        nav('/mini-admin/')
      }).catch(res => {
        nav('/mini-admin/login')
      })
  }

  const { email, password } = state

  return <form method="POST" id="login" className='rounded-lg bg-white color-dark' onSubmit={handleSubmit}>
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

}


export default Login