import React, { useState } from 'react';
import styles from "./Input.module.css";
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Input() {
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.trim()) {
      localStorage.setItem('gamePin', pin);
      navigate('/join');  // Navega a la pantalla de JoinGame
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputContainer}>
      <input 
        type="text" 
        placeholder='Ingresa un código'
        className={styles.customInput}
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <Button type="submit">Unirse</Button>
    </form>
  );
}
