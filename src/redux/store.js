import { configureStore } from '@reduxjs/toolkit'
import campReducer from "./campSlice";
import userReducer from "./userSlice";

const store = configureStore({
    reducer: {
        camp: campReducer,
        user: userReducer,
    },
})

export default store