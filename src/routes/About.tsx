import { useStore } from "../store";

export function About() {
  const { bookmarks, add: addBookmark } = useStore((state) => state);

  return (
    <>
      <h1>About</h1>
      <p>{bookmarks}</p>
      <button onClick={() => addBookmark(1)}>Add</button>
    </>
  );
}
