import React from "react";
import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";

export default function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
          
        </nav>
      </div>
    </header>
  );
}
