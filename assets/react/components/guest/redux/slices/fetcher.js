import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetcher = createSlice({
  name: 'fetcher',
  initialState: {
    axios: axios.create({
      baseURL: '/request/'
    }),
    data: {}
  },
  reducers: {
    get: async (state, action) => {
      const {axios} = state

      return await axios.get(action.payload)
        .then(res => {
          return {
            ...state,
            [action.payload] : res.data
          }
        })
    }
  }
})

export const { get } = fetcher.actions

export default fetcher.reducer