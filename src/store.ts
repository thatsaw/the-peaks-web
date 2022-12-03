import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";

type State = {
  bookmarks: number;
  add: (by: number) => void;
};

export const useStore = create<State>()(
  devtools(
    persist(
      immer((set) => ({
        bookmarks: 0,
        add: (by) => set((state) => ({ bookmarks: state.bookmarks + by })),
      })),
      {
        name: "peaks-storage",
      }
    )
  )
);
