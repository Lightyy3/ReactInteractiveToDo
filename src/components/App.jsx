import React, { useState } from "react";
import List from "./List";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleInputChange(event) {
    setText(event.target.value);
  }

  function handleAddItem() {
    if (text.trim() !== "") {
      setItems((prevItems) => [...prevItems, text]);
      setText(""); // Clear input
    }
  }

  function handleDeleteItem(index) {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }

  function handleSaveItem(index, newText) {
    setItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? newText : item))
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={handleAddItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <List
              key={index}
              item={item}
              index={index}
              onEdit={handleAddItem}
              onDelete={handleDeleteItem}
              onSave={handleSaveItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
