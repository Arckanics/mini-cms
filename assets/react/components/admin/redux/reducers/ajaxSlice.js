import { createSlice } from '@reduxjs/toolkit'
import { cleanPath, endOfPath } from '../../../../Functions/app'
import { setBaseUrl } from '../../../../Functions/app'

export const ajaxSlice = createSlice({
  name: 'ajax',
  initialState: {
    url: '',
    baseUrl: setBaseUrl('mini-admin'),
    navURL: "/mini-admin",
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
    },
    clearData: (state) => {
      state.data = {}
      state.url = ""
    }
  }
})

export const { setUrl, pushData, clearData } = ajaxSlice.actions

export default ajaxSlice.reducer