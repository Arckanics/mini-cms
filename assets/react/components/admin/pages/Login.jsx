import React, { useState } from 'react'
import Button from '../ui/Button'
import TxtInput from '../ui/TxtInput'
import { getToken } from '../Functions/Security'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setUrl } from '../redux/reducers/ajaxSlice'
import { cleanPath } from '../../../Functions/app'
import { notify, notifyClose } from '../redux/reducers/notificationSlice'

const Login = () => {
  // router
  const nav = useNavigate()
  // redux - ajax
  const dispatch = useDispatch()
  const XMLSet = useSelector((state) => state.ajax)
  const ajax = axios.create({...XMLSet.axios})
  // redux - Notification
  const lifetime = useSelector((state) => state.notification.life)
  // state
  const [state, setState] = useState({
    email: null,
    password: null,
    _token: getToken(),
  })

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
        let url = res.data.url === "/" ? `${XMLSet.navURL}` : `${XMLSet.navURL}/${res.data.url}`
        dispatch(setUrl(""))
        dispatch(notify({
          type: "info", 
          msg: `Bienvenue ${state.email}`,
          timeout: setTimeout(() => dispatch(notifyClose()), lifetime)
        }))
        nav(cleanPath(url))
      }).catch(res => {
        dispatch(notify({
          type: "warning", 
          msg: "connection incorrecte",
          timeout: setTimeout(() => dispatch(notifyClose()), lifetime)
        }))
        nav(`${XMLSet.navURL}/login`)
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
      btnCls='btn primary w-full'
    >Me Connecter</Button>
  </form>

}


export default Login