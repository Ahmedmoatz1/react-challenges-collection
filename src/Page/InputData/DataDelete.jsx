import React from 'react';

// استلام دالة الحذف عبر الـ Props
function DataDelete({ onDelete }) {
  return (
    <div>
      <button onClick={onDelete}>delete</button>
    </div>
  );
}

export default DataDelete;