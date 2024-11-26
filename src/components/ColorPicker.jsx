import React, { useState } from "react";
import "../components/ColorPicker.css";
import CorgiS from "../assets/corgi.s.png";

function ColorPicker() {
    const [color, setColor] = useState("#000000");

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div className="container">
            <h2>Pick a Color</h2>
            <input 
                type="color" 
                value={color} 
                onChange={handleColorChange} 
            />
            <h2>Selected Color: <span style={{ color }}>{color}</span></h2>
            <div className="Corgi">
                <img src={CorgiS} />
                <div className="Heart"  style={{ backgroundColor: color }}></div>
            </div>
        </div>
    );
}

export default ColorPicker;
