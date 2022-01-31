//Global state

import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from '../Reducer/MovieSlice'
import userSlice from "../Reducer/userSlice";

export const Store = configureStore({
   
    reducer: {
        movie: MovieSlice,
        user: userSlice,
    }
})