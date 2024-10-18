import React from 'react'
import './Button.css'

export default function Button({ children }) {
  return (
    <button className='custom-button'>
      {children}
    </button>
  )
}
