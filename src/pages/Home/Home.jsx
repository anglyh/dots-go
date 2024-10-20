import { useState } from "react";
import logo from "../../assets/images/logo.png";
import styles from "./Home.module.css";
import Input from "../../components/common/Input/Input";

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeContainer}>
        <img src={logo} alt="logo" />
        <h1>Dots-Go</h1>
      </div>
      <Input navigate="/game"/>
    </div>
  );
}
