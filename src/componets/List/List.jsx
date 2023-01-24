import React from "react";
import styles from "./List.module.css";

function List({ userInfo }) {
  return (
    <ul>
      {userInfo.map((elem) => {
        return (
          <div className={styles.listInfo}>
            <div className={styles.nameAge}>
              <div className={styles.title}>{elem.title}</div>
              <p>{`(${elem.age} years old)`}</p>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

export default List;
