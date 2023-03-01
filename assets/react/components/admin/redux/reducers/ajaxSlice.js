import { createSlice } from '@reduxjs/toolkit'
import { cleanPath } from '../../../Functions/app'
import { setBaseUrl } from '../../../Functions/app'
import axios from 'axios'

export const ajaxSlice = createSlice({
  name: 'ajax',
  initialState: {
    url: '/',
    axios: {
      baseURL: setBaseUrl('mini-admin'),
      headers: {
        'XMLHttpRequest': true,
      }
    },
    data: {}
  },
  reducers: {
    setUrl: (state, action) => {
      state.url = cleanPath(`${action.payload}`)
    }
  }
})

export const { setUrl } = ajaxSlice.actions

export default ajaxSlice.reducer