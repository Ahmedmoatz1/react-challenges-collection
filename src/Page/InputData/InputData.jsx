import React, { useState } from 'react';
import DataDelete from './DataDelete';

const InputData = () => {
  const [text, setText] = useState([]);
  const [inputtext, setinputtext] = useState("");

  // دالة الإضافة
  function ddd() {
    if (inputtext.trim() === "") return;
    setText([...text, inputtext]);
    setinputtext("");
  }

  function handleDelete(indexToDelete) {
    const updatedText = text.filter((_, index) => index !== indexToDelete);
    setText(updatedText);
  }

  return (
    <div>
      {text.map((item, index) => (
        <div key={index}>
          <h1>{index + 1} {item}</h1>
          <DataDelete onDelete={() => handleDelete(index)} />
        </div>
      ))}

      <input
        type="text"
        placeholder="اكتب هنا..."
        onChange={(e) => setinputtext(e.target.value)}
        value={inputtext}
      />
      <button onClick={ddd}>add</button>
    </div>
  );
};

export default InputData;