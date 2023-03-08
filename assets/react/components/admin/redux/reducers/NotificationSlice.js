import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    msg: "",
    status: "out",
    type: "info"
  },
  reducers: {
    notify: (state, action) => {
      state = {
        ...state,
        msg: action.payload.msg,
        status : "in",
      }
    }
  }
})

export const { notify } = notificationSlice.actions

export default notificationSlice.reducer