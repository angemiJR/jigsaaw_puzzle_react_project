import React, { useState } from "react";
import "../components/main.css";



function Button() {
    const [item, setItem] = useState(0);
  
    const incrementItem = () => {
      setItem(item + 1);
    };
  
    const decrementItem = () => {
        if (item > 0) {
          setItem(item - 1);
        }
      };
      
  
    const resetItem = () => {
      setItem(0);
    };
  
    return (
      <>
        <div className="btn_section">
          <button onClick={incrementItem}>+</button>
          <h3>{item}</h3>
          <button onClick={decrementItem}>-</button>
          <button onClick={resetItem}><h3>Reset</h3></button>
        </div>
      </>
    );
  }
  
  export default Button;
  