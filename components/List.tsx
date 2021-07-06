import { ReactNode } from "react";
import styles from "./List.module.css";

type ItemProps = {
  children: ReactNode;
};

function Item({ children }: ItemProps) {
  return <li className={styles.item}>{children}</li>;
}

type ListProps = {
  children: ReactNode;
};

function List({ children }: ListProps) {
  return <ul>{children}</ul>;
}

List.Item = Item;

export default List;
