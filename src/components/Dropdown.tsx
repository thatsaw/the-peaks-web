import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import styles from "./Dropdown.module.css";

type Option = {
  label: string;
  value: string;
};

const options: Option[] = [
  {
    label: "Newest First",
    value: "newest",
  },
  {
    label: "Oldest First",
    value: "oldest",
  },
];

export function Dropdown() {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const border = "1px solid gray";

  function onOpened() {
    setOpened(!opened);
  }

  function onSelect(option: Option) {
    setSelected(option);
    onOpened();

    navigate({
      pathname: "/",
      search: `order-by=${selected.value}`,
    });
  }

  return (
    <div
      className={styles.wrapper}
      style={{
        borderBottom: opened ? 0 : border,
        borderTop: opened ? border : 0,
        borderLeft: opened ? border : 0,
        borderRight: opened ? border : 0,
      }}
    >
      <button onClick={onOpened}>
        {selected.label}
        {opened ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </button>
      {opened ? (
        <ul className={styles.container}>
          {options.map((option) => (
            <li key={option.value} className={styles.option}>
              <button onClick={() => onSelect(option)}>{option.label}</button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
