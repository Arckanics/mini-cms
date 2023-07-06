import React from 'react'
import { useState } from 'react'
import { Button, TxtLabelInput } from '../ui/Inputs'



const NewPassword = () => {

  const [passwords, setPasswods] = useState({first:"",second:""})
  const [viewPass, setViewPass] = useState(false)

  const requestNPassword = e => {e.preventDefault()}

  const handleChange = e => {
    setPasswods({
      ...passwords,
      [e.target.name] : e.target.value
    })
  }

  const {first,second} = passwords
  return (
    <form
      method="POST"
      id="new-pass"
      className={"rounded-lg bg-white color-dark"}
      onSubmit={requestNPassword}
    >
      <div className="form-title">Nouveau mot de passe</div>
      <div className="input-group-clear-outline">
        <TxtLabelInput
          type={ !viewPass ? "password" : "text" }
          label="Mot de passe"
          id="first"
          value={first}
          placeholder="adresse email..."
          inputCls="input-txt"
          labelCls="label"
          onChange={handleChange}
        />
        
        <TxtLabelInput
          type="password"
          label="Confirmer le mot de passe"
          id="second"
          value={second}
          placeholder="adresse email..."
          inputCls="input-txt"
          labelCls="label"
          onChange={handleChange}
        />
        <div className="sen-link px-2">
          <span className="sen-link-txt end" onClick={(e) => setViewPass(!viewPass)}>
            { !viewPass ? "Afficher" : "Cacher" }
          </span>
        </div>
      </div>

      <Button divCls="pt-1 p-4" btnCls="btn primary w-full" >
        Envoyer
      </Button>
    </form>
  )
}

export default NewPassword