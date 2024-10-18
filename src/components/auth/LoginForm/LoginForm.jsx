import React from 'react';
import './loginForm.css'; // Asegúrate de crear este archivo para los estilos

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
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

export default Login;
