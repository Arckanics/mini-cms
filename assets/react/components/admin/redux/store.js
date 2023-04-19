import { configureStore } from "@reduxjs/toolkit";
import { notificationSlice, ajaxSlice, lexicalSlice } from './reducers';

export default configureStore({
  reducer: {
    ajax: ajaxSlice,
    notification: notificationSlice,
    lexical: lexicalSlice
  },
})
