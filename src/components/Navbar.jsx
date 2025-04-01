import React from "react";
import styles from "../styles/Nav.module.css";
// import { useContext } from "react";
// import { itemContext } from "../itemContext";
// import { totalContext } from "../totalContext";
import { useValue } from "../itemContext";

function Navbar() {
  const {item, total, clear, toggle} = useValue();
  // const {total} = useContext(totalContext);

  // console.log("value", value);
  return (
    
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonsWrapper}>
        <button className={styles.button} onClick={toggle}>Cart</button>
      <button className={styles.button} onClick={clear}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
