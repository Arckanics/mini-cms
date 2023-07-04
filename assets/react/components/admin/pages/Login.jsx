import React, { useState } from 'react'
import { Button, TxtLabelInput } from '../ui/Inputs'
import { getToken } from '../Functions/Security'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUrl, updateAccount } from '../redux/reducers/ajaxSlice'
import { cleanPath } from '../../../Functions/app'
import { notify, notifyClose } from '../redux/reducers/notificationSlice'
import axios from 'axios'

const Login = () => {
  // router
  const nav = useNavigate()
  // redux - ajax
  const dispatch = useDispatch()
  const XMLSet = useSelector(state => state.ajax)
  const account = useSelector(state => state.ajax.account)
  const ajax = axios.create({...XMLSet.axios})
  // redux - Notification
  const lifetime = useSelector((state) => state.notification.life)
  // state
  const [state, setState] = useState({
    email: account && account.email,
    password: null,
    _token: getToken(),
  })

  const [isConnected, setConnected] = useState(false);
  // timeoutVar
  let blurTimeout = null

  const handleChange = (e) => {
    setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
    e.target.name === "email" && dispatch(updateAccount({email: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isConnected) {
      return false
    }
    blurTimeout = blurTimeout !== null ? clearTimeout(blurTimeout) : setTimeout(() => e.nativeEvent.submitter.blur(), 500)
    ajax.post('/login', { ...state })
      .then(res => {
        let url = res.data.url === "/" ? `${XMLSet.navURL}` : `${XMLSet.navURL}/${res.data.url}`
        dispatch(setUrl(""))
        dispatch(notify({
          type: "info", 
          msg: `Bienvenue ${state.email}`,
          timeout: setTimeout(() => dispatch(notifyClose()), lifetime)
        }))
        setConnected(true)
        setTimeout(()=>nav(cleanPath(url)),400)
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

  return <form method="POST" id="login" className={'rounded-lg bg-white color-dark'+(isConnected ? ' connected':'')} onSubmit={handleSubmit}>
    <div className='form-title'>Connexion</div>
    <div className='input-group-clear-outline'>
      <TxtLabelInput type="text" label="Compte(Email)" id="email" value={email} placeholder="adresse email..."
        inputCls='input-txt' labelCls='label' onChange={handleChange}
      />
      <TxtLabelInput type="password" label="Mot de passe" id="password" value={password} placeholder="mot de passe..."
        inputCls='input-txt' labelCls='label' onChange={handleChange}
      />
      <div className='sen-link px-2'>
        <NavLink className='sen-link-txt end' to={`${XMLSet.navURL}/reset-pass`} >Mot de passe oublié ?</NavLink>
      </div>
    </div>
    
    <Button
      divCls='pt-1 p-4'
      btnCls='btn primary w-full'
    >Me Connecter</Button>
  </form>

}


export default Login