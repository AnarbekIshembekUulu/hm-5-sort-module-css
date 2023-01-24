import React from "react";
import styles from "./button.module.css";

function Button(props) {
  return (
    <button
      className={styles.buttonAdd}
      disabled={props.btnDisable}
      onClick={props.onClick}
    >
      {props.valueText}
    </button>
  );
}

export default Button;
