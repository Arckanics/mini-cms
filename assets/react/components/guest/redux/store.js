import { configureStore } from "@reduxjs/toolkit";
import { fetcher } from "./slices"


export default configureStore({
  reducer: {
    fetcher: fetcher
  }
})