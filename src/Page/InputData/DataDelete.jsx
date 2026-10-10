import React from 'react';

function DataDelete({ onDelete }) {
  return (
    <div>
      <button onClick={onDelete}>delete</button>
    </div>
  );
}

export default DataDelete;