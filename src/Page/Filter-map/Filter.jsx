import React, { useEffect, useState } from 'react';

function Filter() {
  const [afilter] = useState(['Ahmed', 'wwwwww', 'mohamed', 'khaled']);
  const [color, setcolor] = useState('red');
  const [dcolor, setbcolor] = useState(0); // يحتفظ بالرقم المستهدف
  const [count, setcount] = useState(0);

  useEffect(() => {
    if (count < dcolor) {
      const timer = setTimeout(() => {
        setcount((prevCount) => prevCount + 1);
      }, 1000);

      return () => clearTimeout(timer); 
    }
  }, [count, dcolor]); 

  function handleadd(e) {
    e.preventDefault();
    setcolor(`تم ضبط العداد إلى: ${dcolor}`);
    
  }

  return (
    <div>
      <ul>
      
        {afilter.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div>
        <h1>{color}</h1>
        <input 
          type="number" 
          value={dcolor} 
          onChange={(e) => setbcolor(Number(e.target.value))} 
        />
        <button onClick={handleadd}>clickme</button>
      </div>

      <h1>{count}</h1>
    </div>
  );
}

export default Filter;