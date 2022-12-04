import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";
import type { Content } from "./api/post";

type State = {
  bookmarks: Content[];
  addBookmark: (content: Content) => void;
  removeBookmark: (content: Content) => void;
};

/**
 * Prevent adding duplicated bookmarks.
 */
function uniqueById(bookmarks: Content[]) {
  const set = new Set();

  return bookmarks.filter((bookmark) => {
    const isDuplicate = set.has(bookmark.id);
    set.add(bookmark.id);

    return !isDuplicate;
  });
}

export const useStore = create<State>()(
  devtools(
    persist(
      immer((set) => ({
        // Initial state
        bookmarks: [],
        addBookmark: (content) =>
          set((state) => ({
            bookmarks: uniqueById([...state.bookmarks, content]),
          })),
        removeBookmark: (content) =>
          set((state) => ({
            bookmarks: state.bookmarks.filter(
              (bookmark) => bookmark.id !== content.id
            ),
          })),
      })),
      {
        name: "peaks-storage",
      }
    )
  )
);
