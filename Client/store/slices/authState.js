import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        auth: false,
    },
    reducers: {
        registered: (state) => {
            state.auth = true;
        },
        nonRegistered: (state) => {
            state.auth = false;
        }
    },
});

export const { registered, nonRegistered } = authSlice.actions;
export default authSlice.reducer;
