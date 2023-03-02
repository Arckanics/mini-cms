import { createSlice } from '@reduxjs/toolkit'
import { cleanPath, endOfPath } from '../../../Functions/app'
import { setBaseUrl } from '../../../Functions/app'
import axios from 'axios'

export const ajaxSlice = createSlice({
  name: 'ajax',
  initialState: {
    url: '',
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
      state.url = endOfPath(cleanPath(`${action.payload}`))
    },
    pushData: (state, action) => {
      const { name, data } = action.payload
      state.data = {...state.data, [name]: data}
    }
  }
})

export const { setUrl, pushData } = ajaxSlice.actions

export default ajaxSlice.reducer