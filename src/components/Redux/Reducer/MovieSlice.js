import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    popular: null,
    newTo: null,
    kidsTv: null,
    original: null,
    hollywood: null,
    trending: null,
}

const MovieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setDisneyMovies: ( state, action ) => { 
                state.popular = action.payload.popular;
                state.newTo = action.payload.newTo;
                state.kidsTv = action.payload.kidsTv;
                state.original = action.payload.original;
                state.hollywood = action.payload.hollywood;
                state.trending = action.payload.trending;
        },
    },
});

export const { setDisneyMovies } = MovieSlice.actions;

export const selectPopular = (state) => state.movie.popular;
export const selectNewTo = (state) => state.movie.newTo;
export const selectKidsTV = (state) => state.movie.kidsTv;
export const selectOriginal = (state) => state.movie.original;
export const selectHollywood = (state) => state.movie.hollywood;
export const selectTrending = (state) => state.movie.trending;



export default MovieSlice.reducer;