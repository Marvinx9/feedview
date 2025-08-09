import styles from "./Header.module.css";
import logo from "/feed-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="feed-logo" />
    </header>
  );
}
