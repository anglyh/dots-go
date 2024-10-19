import React from 'react'
import styles from "./Button.module.css"

export default function Button({ children }) {
  console.log(styles);
  return (
    <button className={styles.customButton}>
      {children}
    </button>
  )
}
