
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import InputData from './Page/InputData/InputData'
import ToDoList from './Page/ToDoList/ToDoList'
import ExpenseTracker from './Page/ExpenseTracker/ExpenseTracker'
import Filter from './Page/Filter-map/Filter'
import Counter from './Page/Counter/Counter'
import MemoryCard from './Page/Memory_Card/MemoryCard'
import DoubleFetching from './Page/Double-Fetching/DoubleFetching'
import Chrono from './Page/timer/Chrono'
import AccessibleAccordion from './Page/Accessible-Accordion/AccessibleAccordion'

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
     <Link className='Link' to="/DoubleFetching">DoubleFetching</Link>
     <Link className='Link' to="/Chrono">Chrono</Link>
     <Link className='Link' to="/Accessible_Accordion">Accessible Accordion</Link>
     
     </nav>
     <Routes>
        <Route path='/InputData' element={<InputData/>}/>
        <Route path='/ToDoList' element={<ToDoList/>}/>
        <Route path='/ExpenseTracker' element={<ExpenseTracker/>}/>
        <Route path='/Counter' element={<Counter/>}/>
        <Route path='/Memory_Card' element={<MemoryCard/>}/>
        <Route path='/DoubleFetching' element={<DoubleFetching/>}/>
        <Route path='/Chrono' element={<Chrono/>}/>
        <Route path='/Accessible_Accordion' element={<AccessibleAccordion/>}/>
        
    </Routes>
    </>
    
  )
}

export default App
