import { create } from "zustand"

export const useStore = create((set) => ({
    userSelect: "",
    updateUserSelect: (state) => set(() => ({ userSelect: state})),
    enemySelect: "",
    updateEnemySelect: (state) => set(() => ({enemySelect: state}))
}))