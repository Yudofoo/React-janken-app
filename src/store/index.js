import { configureStore } from "@reduxjs/toolkit"
import userSelectReducer from "../userSelectSlice"
import enemySelectReducer from "../enemySelectSlice"

export const store = configureStore({
    reducer: {
        userSelect: userSelectReducer,
        enemySelect: enemySelectReducer,
    }
})