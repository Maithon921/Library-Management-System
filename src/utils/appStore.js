import { configureStore } from "@reduxjs/toolkit";
import BookDataReducer from "./bookDataSlice"

export const appStore = configureStore({
    reducer: {
        BookData: BookDataReducer,
    }
})
