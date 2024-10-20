import React from 'react'
import styles from "./Input.module.css"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

export default function Input({ navigate }) {
  return (
    <div className={styles.inputContainer}>
      <input 
        type="text" 
        placeholder='Ingresa un código'
        className={styles.customInput}
      />
      <Button>
        <Link to={navigate}>Unirse</Link>
      </Button>
    </div>
  )
}
