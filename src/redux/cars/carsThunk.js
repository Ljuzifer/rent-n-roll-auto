import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6515d25e09e3260018c92f5c.mockapi.io/api";

export const fetchAllCars = createAsyncThunk(
    "cars/getAll",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/adverts");
            console.log(res.data);
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);

fetchAllCars();
