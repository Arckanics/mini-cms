import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    msg: "",
    status: "out",
    type: "info",
    timeout: null,
    life: 4000
  },
  reducers: {
    notify: (state, action) => {
      state.timeout ? clearTimeout(state.timeout) : null
      const {type,msg,timeout} = action.payload
      
      return {
        ...state,
        msg: msg,
        type: type,
        status : "in",
        timeout: timeout || null,
      }
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
      return {
        ...state,
        timeout: null,
        status: 'out'
      }
    }
  }
})

export const { notify, notifyClose, notifyKeep } = notificationSlice.actions

export default notificationSlice.reducer