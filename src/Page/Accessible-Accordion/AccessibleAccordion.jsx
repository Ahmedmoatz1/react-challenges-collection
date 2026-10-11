import React, { useState } from 'react'
import styles from './Accessible_Accordion.module.css'
import Card_Accessible from './Card_Accessible'
function AccessibleAccordion() {
    
  return (
    <div className={styles.continer}>
  <h1>Accessible Accordion</h1>
  <Card_Accessible title="What is React?" content="A JavaScript library for building UIs." />
  <Card_Accessible title="Who created React?" content="Meta (Facebook) in 2013." />
  <Card_Accessible title="Why use React?" content="It makes building UIs simple." />
</div>
  )
}

export default AccessibleAccordion
