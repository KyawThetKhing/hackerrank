import { configureStore } from '@reduxjs/toolkit'
import campReducer from "./campSlice";
import contestReducer from './contestSlice';
import userReducer from "./userSlice";

const store = configureStore({
    reducer: {
        camp: campReducer,
        user: userReducer,
        contests: contestReducer
    },
})

export default store