import { createSlice } from "@reduxjs/toolkit"

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const enemySelectSlice = createSlice({
    name: "enemySelect",
    initialState: {
        enemySelect: "",
    },
    reducers: {
        select: (state) => {
            state.enemySelect = random(1, 3)
        },
},
});

export const { select } = enemySelectSlice.actions;

export default enemySelectSlice.reducer