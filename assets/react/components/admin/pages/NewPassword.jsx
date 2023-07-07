import React from 'react'
import { useState, useEffect } from 'react'
import { Button, TxtLabelInput } from '../ui/Inputs'



const NewPassword = () => {

  const [passwords, setPasswods] = useState({first:"",second:""})
  const [viewPass, setViewPass] = useState(false)
  const progressColor = ['#FA4C4C', '#E27645', '#CBA03E', '#B3C937', '#9BF330']
  const [secLevel, setSecLevel] = useState(0)
  const requestNPassword = e => {e.preventDefault()}

  const progressWidth = () => {
    const actual = 100 / (progressColor.length - 1) * secLevel
    return actual < 1 ? 1 : actual
  }

  useEffect(() => {
    const {first} = passwords
    let securityCheck = 0

    // longueur
    first.length > 5 && securityCheck++

    // majuscules

    first.match(/[A-Z]/g) && securityCheck++
    // chiffres

    first.match(/[0-9]/g) && securityCheck++
    // caractère spéciaux

    first.match(/\W/g) && securityCheck++


    setSecLevel(securityCheck)
  }, [passwords.first])
  

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
          placeholder="..."
          inputCls="input-txt"
          labelCls="label"
          autoComplete="off"
          onChange={handleChange}
        />
        <div className='px-2 select-none'>
          <div>
            <div>taille {first.length} / 6 </div>
          </div>
          <div className='text-xs text-stone-500' >force du mot de passe</div>
          <div className="progress-bar">
            <div className="track" style={{
              backgroundColor: progressColor[secLevel],
              width: progressWidth() + "%"
            }}></div>
          </div>
        </div>
        <TxtLabelInput
          type="password"
          label="Confirmer le mot de passe"
          id="second"
          value={second}
          placeholder="..."
          inputCls="input-txt"
          labelCls="label"
          autoComplete="off"
          onChange={handleChange}
        />
        <div className="sen-link px-2">
          <span className="sen-link-txt end" onClick={(e) => setViewPass(!viewPass)}>
            { !viewPass ? "Afficher" : "Cacher" }
          </span>
        </div>
      </div>

      <Button divCls="pt-1 p-4" btnCls="btn primary w-full" disabled={!(first == second && first.length >= 6)}>
        Envoyer
      </Button>
    </form>
  )
}

export default NewPassword