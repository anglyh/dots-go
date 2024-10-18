// components/auth/RegisterForm/RegisterForm.jsx
import React from 'react';
import './RegisterForm.css'; // Asegúrate de que el nombre coincida exactamente

const RegisterForm = () => {
  return (
    <div className="login-container">
      <form className="login-form">
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

export default RegisterForm;
