import React, { useState } from "react";

function List({ item, index, onEdit, onDelete, onSave }) {
  const [isEditing, setIsEditing] = useState(false); // Local state for edit mode
  const [editText, setEditText] = useState(item); // Local state for edited text

  function handleEdit() {
    setIsEditing(true);
  }

  function handleCancel() {
    setIsEditing(false);
    setEditText(item); // Reset to original value
  }

  function handleSave() {
    onSave(index, editText); // Call parent save function
    setIsEditing(false); // Exit edit mode
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{item}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default List;
