import React from 'react'
import './Header.css'
import Button from '../../components/common/Button/Button'

export default function Header() {
  return (
    <header>
      <nav>
        <Button children="Iniciar Sesión" />
        <Button children="Registrarse" />
      </nav>
    </header>
  )
}
