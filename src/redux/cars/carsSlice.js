import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./carsInitialState";
import { fetchAllCars } from "./carsThunk";

const handlePending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const handleFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            // console.log(action.payload);
            const choisenCar = state.items.find((item) => item.id === action.payload.id);
            // console.log(choisenCar);
            if (choisenCar) {
                state.favorites.push(choisenCar);
                // console.log(state.favorites);
            }
        },

        delFromFavorites: (state, action) => {
            const newFavorite = state.favorites.filter((item) => item.id !== action.payload.id);
            state.favorites = newFavorite;
        },

        setFilter(state, action) {
            state.filter = action.payload;
        },

        resetFilter: (state) => {
            state.filter = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCars.pending, handlePending)
            .addCase(fetchAllCars.fulfilled, handleFulfilled)
            .addCase(fetchAllCars.rejected, handleRejected);
    },
});

export const { addToFavorites, delFromFavorites, setFilter, resetFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
