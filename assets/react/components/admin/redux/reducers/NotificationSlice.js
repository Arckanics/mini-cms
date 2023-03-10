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

      state = {
        ...state,
        msg: action.payload.msg,
        status : "in",
      }

      state.timeout = setTimeout(() => {
        state = {...state, status: 'out', timeout: null }
      }, 2500);
    },

    notifyClose: (state) => {
      state.timeout ? clearTimeout(state.timeout) : null
      state = {...state, status: 'out'}
    }
  }
})

export const { notify, notifyClose } = notificationSlice.actions

export default notificationSlice.reducer