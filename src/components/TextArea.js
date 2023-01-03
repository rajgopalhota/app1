import React, { useState } from 'react'
import './CSS/textarea.css'


export default function TextArea(props) {
    const [text, setText] = useState("");
    const handleOnClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // console.log("Handled onclick");
    }
    const handleOnClickLow = () => {
        let newText = text.toLowerCase();
        setText(newText);
        // console.log("Handled onclick");
    }
    const clearClick = () => {
        setText("");
        // console.log("Handled onclick");
    }
    const handleOnChange = (event) => {
        // console.log("On change called");
        setText(event.target.value);
    }
    return (
        <>
            <div className="container my-5">
                <h4>{props.heading}</h4>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingTextarea" value={text} onChange={handleOnChange} ></textarea>
                    <label htmlFor="textBox">Enter Text Here</label>
                </div>
                <div className="btns">
                    <button className="btn btn-primary my-4 mx-2" onClick={handleOnClick}>To Uppercase</button>
                    <button className="btn btn-primary my-4 mx-2" onClick={handleOnClickLow}>To Lowercase</button>
                    <button className="btn btn-primary my-4 mx-2" onClick={clearClick}>Clear</button>
                </div>
                <div className="container summaryword">
                    <h4>Text Summary</h4>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.8 * text.split(" ").length} words per minute</p>
                    <p>{0.8 * text.length} characters per minute</p>
                </div>
            </div>
        </>
    )
}
