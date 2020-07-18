import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function handleclick() {
    props.onChecked(inputText);
    setInputText("");
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={handleclick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
