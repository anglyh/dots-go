import React from 'react'
import './Input.css'
import Button from '../Button/Button'

export default function Input() {
  return (
    <div className='input-container'>
      <input 
        type="text" 
        placeholder='Ingresa un código'
        className='custom-input'
      />
      <Button children="Unirse" />
    </div>
  )
}
