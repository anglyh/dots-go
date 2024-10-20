import React from "react";
import styles from "./Header.module.css";
import Button from "../../components/common/Button/Button";
import logo_small from "../../assets/images/logo_small.png"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/"><img src={logo_small} /></Link>
      <nav className={styles.headerNav}>
        <Button children="Iniciar Sesión" />
        <Button children="Registrarse" />
      </nav>
    </header>
  );
}
