import React, { useEffect, useState } from 'react';

function Filter() {
  const [afilter] = useState(['Ahmed', 'wwwwww', 'mohamed', 'khaled']);
  const [color, setcolor] = useState('red');
  const [dcolor, setbcolor] = useState(0); // يحتفظ بالرقم المستهدف
  const [count, setcount] = useState(0);

  // الـ useEffect تعمل تلقائياً كلما تغيرت count أو dcolor
  useEffect(() => {
    if (count < dcolor) {
      const timer = setTimeout(() => {
        setcount((prevCount) => prevCount + 1);
      }, 1000);

      return () => clearTimeout(timer); // تنظيف المؤقت
    }
  }, [count, dcolor]); 

  function handleadd(e) {
    e.preventDefault();
    setcolor(`تم ضبط العداد إلى: ${dcolor}`);
    // لا نضع useEffect هنا إطلاقاً!
  }

  return (
    <div>
      <ul>
        {/* العرض الصحيح للمصفوفة */}
        {afilter.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div>
        <h1>{color}</h1>
        {/* تحويل القيمة المدخلة إلى رقم عبر Number() */}
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