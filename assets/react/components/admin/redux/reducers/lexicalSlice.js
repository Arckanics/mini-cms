import { createSlice } from "@reduxjs/toolkit";

export const lexicalSlice = createSlice({
  name: "lexical",
  initialState: {
    currentImg: null
  },
  reducers: {
    openImg: (state, action) => {

      return {
        ...state,
        currentImg: action.payload
      }
    }
  }
})

export const { openImg, } = lexicalSlice.actions

export default lexicalSlice.reducer