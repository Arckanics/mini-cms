import React, { useEffect } from "react";
import { updateTitle } from "../../../Functions/app";
import { Button } from "../ui";
import { TxtLabelInput } from "../ui/Inputs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateAccount } from "../redux/reducers/ajaxSlice";
import axios from "axios";
import { notify, notifyClose } from "../redux/reducers/notificationSlice";
const ResetPass = () => {
  const XMLSet = useSelector(state => state.ajax);
  const email = useSelector(state => state.ajax.account.email);
  const ajax = axios.create({ ...XMLSet.axios });
  const lifetime = 4000
  const dispatch = useDispatch();
  useEffect(() => updateTitle("reset-pass"));

  const handleChange = e => {
    dispatch(updateAccount({ email: e.target.value }));
  };

  const notification = res => {
    
    const data =  res.data ? res.data : res.response.data ;
    console.log(data);
      dispatch(
        notify({
          type: data.type,
          msg: data.msg,
          timeout: setTimeout(() => dispatch(notifyClose()), lifetime),
        })
      );
  }

  const requestReset = e => {
    e.preventDefault();
    ajax.post(`/check-mail`, { email: email })
    .then(r => notification(r))
    .catch(r => notification(r))
  };

  return (
    <form
      method="POST"
      id="reset-pass"
      className={"rounded-lg bg-white color-dark"}
      onSubmit={requestReset}
    >
      <div className="form-title">Réinitialisation</div>
      <div className="input-group-clear-outline">
        <TxtLabelInput
          type="text"
          label="Compte(Email)"
          id="email"
          value={email}
          placeholder="adresse email..."
          inputCls="input-txt"
          labelCls="label"
          onChange={handleChange}
        />
        <div className="sen-link px-2">
          <NavLink className="sen-link-txt end" to={`${XMLSet.navURL}/login`}>
            Retour
          </NavLink>
        </div>
      </div>

      <Button divCls="pt-1 p-4" btnCls="btn primary w-full">
        Envoyer
      </Button>
    </form>
  );
};

export default ResetPass;
