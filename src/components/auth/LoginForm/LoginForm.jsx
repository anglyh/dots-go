import React from 'react';
import styles from "./LoginForm.module.css"

export default function LoginForm() {
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h2>Iniciar Sesion</h2>
        <label>Nombre De Usuario:</label>
        <input type="text" placeholder="Ingresa tu usuario" />
        <label>Contraseña:</label>
        <input type="password" placeholder="Ingresa tu contraseña" />
        <button type="submit">Iniciar Sesion</button>
      </form>
    </div>
  );
};
