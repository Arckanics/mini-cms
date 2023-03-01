import { configureStore } from "@reduxjs/toolkit";
import ajaxSlice from './reducers/ajaxSlice'

export default configureStore({
  reducer: {
    ajax: ajaxSlice,
  },
})
