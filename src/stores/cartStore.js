import { create } from 'zustand'

export const useCartStore = create((set) => ({
    items: [],
    addItem: (item) =>
        set((state) => ({
            items: [...state.items, item],
        })),
    removeItem: (id) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== id),
        })),
    clearCart: () => set({ items: [] }),
}))
