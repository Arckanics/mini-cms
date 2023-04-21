import { createSlice } from "@reduxjs/toolkit";

export const lexicalSlice = createSlice({
  name: "lexical",
  initialState: {
    imgKey: null
  },
  reducers: {
    setImgKey: (state, action) => {
      return {
        ...state,
        imgKey: action.payload
      }
    }
  }
})

export const { setImgKey, } = lexicalSlice.actions

export default lexicalSlice.reducer