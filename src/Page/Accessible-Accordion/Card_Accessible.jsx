import React, { useState } from 'react'
import styles from './Accessible_Accordion.module.css'
function Card_Accessible({title,content }) {
  const [open, setopen] = useState(false)
  const [plus, setplus] = useState('+')

  function handleOpen() {
    setopen(!open)
    setplus('-')

  }

  return (
    <div>
      <h2>
  <button className={styles.header} onClick={handleOpen}>
    {title} {open ? '-' : '+'}
  </button>
</h2>
<div className={`${styles.panel} ${open ? styles.open : ''}`}>
  <p className={styles.content}>{content}</p>
</div>
    
    </div>
  )
}

export default Card_Accessible