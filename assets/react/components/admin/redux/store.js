import { configureStore } from "@reduxjs/toolkit";
import { notificationSlice, ajaxSlice } from './reducers';

export default configureStore({
  reducer: {
    ajax: ajaxSlice,
    notification: notificationSlice
  },
})
