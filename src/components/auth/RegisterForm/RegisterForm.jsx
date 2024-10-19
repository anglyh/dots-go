// components/auth/RegisterForm/RegisterForm.jsx
import React from 'react';
import styles from "./RegisterForm.module.css"

export default function RegisterForm() {
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h2>Crear Cuenta</h2>
        <label>Nombre De Usuario:</label>
        <input type="text" placeholder="Ingresa tu usuario" />

        <label>Contraseña:</label>
        <input type="password" placeholder="Ingresa tu contraseña" />

        <label>Confirmar Contraseña:</label>
        <input type="password" placeholder="Confirma tu contraseña" />

        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
};

