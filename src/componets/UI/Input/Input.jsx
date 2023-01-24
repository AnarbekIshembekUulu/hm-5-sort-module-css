import React from "react";
import styles from "./input.module.css";

function Input({ labelName, inputType, placeHolder, onChange, ...rest }) {
  return (
    <div>
      <div>
        <label className={styles.labelStyle}>{labelName}</label>
      </div>
      <div>
        <input
          className={styles.inputStyle}
          type={inputType}
          placeholder={placeHolder}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
}

export default Input;
