import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from "./Home.module.css";
import Input from "../../components/common/Input/Input";

export default function Home() {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!pin.trim()) return;

    localStorage.setItem("gamePin", pin);
    navigate("/join"); // Redirige a la pantalla de ingreso al juego
  };

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeContainer}>
        <img src={logo} alt="logo" />
        <h1>DOTS-GO</h1>
      </div>
      <Input
        placeholder="Ingresa el PIN del juego"
        buttonText="Unirse"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
