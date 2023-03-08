import { configureStore } from "@reduxjs/toolkit";
import ajaxSlice from './reducers/ajaxSlice'
import notificationSlice from "./reducers/NotificationSlice";

export default configureStore({
  reducer: {
    ajax: ajaxSlice,
    notification: notificationSlice
  },
})
