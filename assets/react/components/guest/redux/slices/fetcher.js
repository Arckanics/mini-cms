import { createSlice } from "@reduxjs/toolkit";

const fetcher = createSlice({
  name: 'fetcher',
  initialState: {},
  reducers: {
    setData: (state, action) => {
      const { articles, page } = action.payload
      return {
        ...state,
        articles,
        page
      }
    }
  }
})

export const { setData } = fetcher.actions

export default fetcher.reducer