import React from "react";
import styles from "./Header.module.css";
import Button from "../../components/common/Button/Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Button children="Iniciar Sesión" />
        <Button children="Registrarse" />
      </nav>
    </header>
  );
}
