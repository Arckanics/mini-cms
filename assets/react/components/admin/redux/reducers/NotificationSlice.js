import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    msg: "",
    status: "out",
    type: "info",
    timeout: null
  },
  reducers: {
    notify: (state, action) => {
      state.timeout ? clearTimeout(state.timeout) : null
      const {type,msg,timeout} = action.payload
      
      state = {
        msg: msg,
        type: type,
        status : "in",
        timeout: timeout
      }
      return state
    },

    notifyClose: (state, action) => {
      state.timeout ? clearTimeout(state.timeout) : null
      state = {
        ...state,
        timeout: null,
        status: 'out'
      }
      return state
    }
  }
})

export const { notify, notifyClose } = notificationSlice.actions

export default notificationSlice.reducer