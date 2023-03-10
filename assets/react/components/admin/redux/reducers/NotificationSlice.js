import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    msg: "",
    status: "out",
    type: "info",
    timeout: null,
  },
  reducers: {
    notify: (state, action) => {
      state.timeout ? clearTimeout(state.timeout) : null
      const {type,msg,timeout} = action.payload
      
      state = {
        msg: msg,
        type: type,
        status : "in",
        timeout: timeout,
      }
      return state
    },

    notifyKeep: (state, action) => {
      const {event, func} = action.payload
      state.timeout ? clearTimeout(state.timeout) : null
      if (event === "stay") {
        return {
          ...state,
          timeout: null,
        }
      } else {
        return {
          ...state,
          timeout: func,
        }
      }
    },

    notifyClose: (state) => {
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

export const { notify, notifyClose, notifyKeep } = notificationSlice.actions

export default notificationSlice.reducer