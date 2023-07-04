import React, { useEffect } from 'react'
import { updateTitle } from '../../../Functions/app'
import { Button } from '../ui'
import { TxtLabelInput } from '../ui/Inputs'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { updateAccount } from '../redux/reducers/ajaxSlice'
const ResetPass = () => {

  const XMLSet = useSelector(state => state.ajax)
  const email = useSelector(state => state.ajax.account.email)
  const dispatch = useDispatch()
  useEffect(() => updateTitle('reset-pass'))

  const handleChange = e => {
    dispatch(updateAccount({email: e.target.value}))
  }

  return (
    <form method="POST" id="reset-pass" className={'rounded-lg bg-white color-dark'} onSubmit={e => e.preventDefault()}>
    <div className='form-title'>Réinitialisation</div>
    <div className='input-group-clear-outline'>
      <TxtLabelInput type="text" label="Compte(Email)" id="email" value={email} placeholder="adresse email..."
        inputCls='input-txt' labelCls='label' onChange={handleChange}
      />
      <div className='sen-link px-2'>
        <NavLink className='sen-link-txt end' to={`${XMLSet.navURL}/login`} >Retour</NavLink>
      </div>
    </div>
    
    <Button
      divCls='pt-1 p-4'
      btnCls='btn primary w-full'
    >Envoyer</Button>
  </form>
  )
}

export default ResetPass