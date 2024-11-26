
import React, { useState } from "react";
import "../components/main.css";

function Button({ price }) {
    const [item, setItem] = useState(0);

    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => {
        if (item > 0) setItem(item - 1);
    };

    return (
        <>
            <div className="btn_section">
                <button onClick={incrementItem}>+</button>
                <h3>{item}</h3>
                <button onClick={decrementItem}>-</button>
                <h3>Total Cost: {(item * price).toFixed(2)} $</h3>
            </div>
        </>
    );
}

export default Button;
