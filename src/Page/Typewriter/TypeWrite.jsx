import React, { useState } from 'react'
import styles from './Typewriter.module.css'

function TypeWrite() {
  const [speed, setspeed] = useState(100)
  const [item, setitem] = useState('Hello, I am learning React!')
  const [typed, setTyped] = useState('')

  return (
    <div>
      <div className={styles.display}>{typed}</div>

      <div className={styles.forms}>
        <textarea value={item} onChange={(e) => setitem(e.target.value)} />

        <label>
          Speed (ms per character):
          <input
            type="number"
            min="10"
            value={speed}
            onChange={(e) => setspeed(Number(e.target.value))}
          />
        </label>

        <button>Start typing</button>
        <button>Clear</button>
      </div>
    </div>
  )
}

export default TypeWrite