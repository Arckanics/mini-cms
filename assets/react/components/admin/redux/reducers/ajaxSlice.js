import { createSlice } from '@reduxjs/toolkit'
import { cleanPath, endOfPath } from '../../../../Functions/app'
import { setBaseUrl } from '../../../../Functions/app'

export const ajaxSlice = createSlice({
  name: 'ajax',
  initialState: {
    url: '',
    baseUrl: setBaseUrl('mini-admin'),
    navURL: "/mini-admin",
    account: {
      email: ""
    },
    axios: {
      baseURL: setBaseUrl('mini-admin'),
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      }
    },
    data: {}
  },
  reducers: {
    setUrl: (state, action) => {
      state.url = endOfPath(cleanPath(`${action.payload}`))
    },
    updateAccount: (state, action) => {
      const {email} = action.payload
      return {
        ...state,
        account: {...state.account, email}
      }
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

export const { setUrl, pushData, clearData, updateAccount } = ajaxSlice.actions

export default ajaxSlice.reducer