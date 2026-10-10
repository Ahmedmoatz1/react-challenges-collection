import React, { useState } from 'react'
import style from './Expense.module.css'

function ExpenseTracker() {
    const [amount, setamount] = useState(50);
    const [day, setday] = useState("");
    const [selectedPeople, setSelectedPeople] = useState([]);
    const [expenses, setExpenses] = useState([]);

    function ddd(e) {
        e.preventDefault();
        const newexpense = {
          id: Date.now(), 
          amount: amount,
          day: day
        }
        setExpenses([...expenses, newexpense]);
        
        
        setday("");
        setamount(50);
    }

  return (
    <div className={style.ExpenseTracker}>
      <h1 className={style.h1}>Expense Tracker</h1>
      
      <div>
        {expenses.map((item) => (
          
          <div key={item.id}>
            <p>{item.day}</p>
            <p>{item.amount}</p>
          </div>
        ))}
      </div>

      <div className={style.interdata}>
        <form onSubmit={ddd}>
            <label htmlFor="">{day}</label>
            {/* ربط قيمة الـ input بالـ state ليصفر عند الـ submit */}
            <input type="date" value={day} onChange={(e) => { setday(e.target.value) }} />
            
            <label htmlFor="">{amount}</label>
            <input type="range" min='1' max="100" value={amount} onChange={(e) => { setamount(e.target.value) }} />
            
            <label htmlFor="">ahmed</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Moatz</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Mahmed</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">khaled</label>
            <input type="checkbox" name="" id="" />
            
            <button type="submit">submit</button>
        </form>
      </div>
    </div>
  )
}

export default ExpenseTracker