import { createSlice } from "@reduxjs/toolkit";

const fetcher = createSlice({
  name: 'fetcher',
  initialState: {
    data: {}
  },
  reducers: {
    setData: (state, action) => {
    }
  }
})

export const { setData } = fetcher.actions

export default fetcher.reducer