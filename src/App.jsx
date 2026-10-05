
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import InputData from './Page/InputData/InputData'
import ToDoList from './Page/ToDoList/ToDoList'
import ExpenseTracker from './Page/ExpenseTracker/ExpenseTracker'
import Filter from './Page/Filter-map/Filter'
import Counter from './Page/Counter/Counter'
import MemoryCard from './Page/Memory_Card/MemoryCard'

function App() {
  
  return (
    <>
    <nav>
     <Link className='Link' to="/InputData">InputData</Link>
     <Link className='Link' to="/ToDoList">ToDoList</Link>
     <Link className='Link' to="/ExpenseTracker">Expense Tracker</Link>
     <Link className='Link' to="/Filter">Filter</Link>
     <Link className='Link' to="/Counter">Counter</Link>
     <Link className='Link' to="/Memory_Card">Memory Card</Link>
     
     </nav>
     <Routes>
        <Route path='/InputData' element={<InputData/>}/>
        <Route path='/ToDoList' element={<ToDoList/>}/>
        <Route path='/ExpenseTracker' element={<ExpenseTracker/>}/>
        <Route path='/Counter' element={<Counter/>}/>
        <Route path='/Memory_Card' element={<MemoryCard/>}/>
        
    </Routes>
    </>
    
  )
}

export default App
