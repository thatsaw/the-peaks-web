import { Link } from "react-router-dom";
import { useStore } from "../store";
import { Card } from "../components/Card";
import { Heading } from "../components/Heading";
import styles from "./Bookmarks.module.css";

export function Bookmarks() {
  const { bookmarks } = useStore((state) => state);

  return (
    <div className={styles.wrapper}>
      <Heading text="All bookmark" />
      <ul className={styles.container}>
        {bookmarks?.map((bookmark) => (
          <li key={bookmark.id}>
            <Link to={`/p/${encodeURIComponent(bookmark.id)}`}>
              <Card {...bookmark.fields} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
