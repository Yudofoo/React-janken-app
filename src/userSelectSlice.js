import { createSlice } from "@reduxjs/toolkit"

export const userSelectSlice = createSlice({
    name: "userSelect",
    initialState: {
        userSelect: "",
    },
    reducers: {
        rock: (state) => {
            state.userSelect = 1
        },
        scissors: (state) => {
            state.userSelect = 2
        },
        paper: (state) => {
            state.userSelect = 3
        },
},
});

export const { rock, scissors, paper } = userSelectSlice.actions;

export default userSelectSlice.reducer