import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from "./Home.module.css";
import Input from "../../components/common/Input/Input";

export default function Home() {
  //const [error, setError] = useState("");
  //const navigate = useNavigate();

  // const handleJoinGame = (pin) => {
  //   localStorage.setItem('gamePin', pin);  
  //   navigate('/join');
  // };

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeContainer}>
        <img src={logo} alt="logo" />
        <h1>DOTS-GO</h1>
      </div>
      <Input navigate="/game"/>
    </div>
  );
}