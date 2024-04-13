import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was Clicked');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    // console.log('Uppercase was Clicked');
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleOnChange = (event) => {
    //  console.log('On Changed');
    setText(event.target.value);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("You're Text is cleared", "success");

  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text is copied", "success");

  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("Extra spaces are removed", "success");

  };
  const handleBold = () => {
    let newText = text.slice(0, text.length - 1);
    setText(newText);
    props.showAlert("You're last alphabet is deleted", "success");

  };
  function textToSpeech() {
    const Speech = new SpeechSynthesisUtterance();
    const message = document.getElementById("myBox").value;
    Speech.lan = "eng";
    Speech.text = message;
    window.speechSynthesis.speak(Speech);
    props.showAlert("You can hear your text", "success");

  }
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          {" "}
          {/*first curly bracket for javascript and second one for object of javascript*/}
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary my-1" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={textToSpeech}>
          text to speech
        </button>
        <button className="btn btn-primary my-1" onClick={copyText}>
          Copy
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleBold}>
          Remove
        </button>
        <button className="btn btn-primary mx-1 my -1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox to preview here"}
        </p>
      </div>
    </>
  );
}
