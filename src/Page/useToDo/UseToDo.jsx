import React, { useState } from 'react'
import styles from './useToDo.module.css'

function UseToDo() {
  const [item, setitem] = useState('')
  const [arraylist, setarraylist] = useState([])

  function handleadd() {
    if (item.trim() === '') return   // متضيفش نص فاضي
    setarraylist([...arraylist, item])
    setitem('')
  }

  return (
    <div>
      <div className={styles.inpute}>
        <input
          type="text"
          value={item}
          onChange={(e) => setitem(e.target.value)}
        />
        <button onClick={handleadd}>Add</button>
      </div>

      <div className={styles.display}>
        {arraylist.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
      </div>
    </div>
  )
}

export default UseToDo