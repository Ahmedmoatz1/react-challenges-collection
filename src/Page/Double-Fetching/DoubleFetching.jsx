import React, { useState } from 'react';
import styles from "./DoubleFetching.module.css";

function DoubleFetching() {

  const [Id, setId] = useState(1);
  const [test, setTest] = useState('');
  const [item, setItem] = useState({
    id: Id,
    Test: test
  });
 

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem({
      id: Id,
      Test: test
    });
  };

  return (
    <div className={styles.contierd}>
      <h1>Double Fetching</h1>
      <div className={styles.display}>
        <label>ID: {item.id} | Test: {item.Test}</label>
      </div>
      <div className={styles.forms}>
        <form onSubmit={handleSubmit}>
          <label>Select ID</label>
          <input 
            type="number" 
            value={Id} 
            onChange={(e) => setId(e.target.value)} 
            
            min={1}
          />
          <input 
            type="text" 
            value={test} 
            onChange={(e) => setTest(e.target.value)} 
            placeholder="Enter test value"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default DoubleFetching;