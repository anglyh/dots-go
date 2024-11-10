import React from "react";
import styles from "./Input.module.css";

export default function Input({ placeholder, buttonText, value, onChange, onSubmit }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className={styles.customInput}
      />
      <button onClick={onSubmit} className={styles.submitButton}>
        {buttonText}
      </button>
    </div>
  );
}
