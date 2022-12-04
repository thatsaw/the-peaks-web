import { HiBookmark } from "react-icons/hi2";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { Dropdown } from "./Dropdown";
import styles from "./Nav.module.css";

type Props = {
  heading: string;
};

export function Nav({ heading }: Props) {
  return (
    <nav className={styles.wrapper}>
      <Heading text={heading} />
      <div className={styles.container}>
        <Button text="View Bookmark" to="/bookmarks">
          <HiBookmark />
        </Button>
        <Dropdown />
      </div>
    </nav>
  );
}
