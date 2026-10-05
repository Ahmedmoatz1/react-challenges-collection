import React, { useState } from 'react'

function ToDoList() {
  const [list , setlist] =useState([]);
  const [item , setitem] = useState('');
  function handleAdd(e){
    e.preventDefault();
    if(!item.trim()) return;
    const newitem = {
      id: Date.now(),
      name: item
    }
    setlist([...list,newitem])
    setitem('')
  }
  function handledelete(id){
    const newlist = list.filter((e)=>e.id !== id)
    setlist(newlist)
  }
  return (
    <div>
      <h1>inter task</h1><form onSubmit={handleAdd}>
        <input type="text" value={item} onChange={(e)=>setitem(e.target.value)}/>
        <button type="submit">add</button>
      </form>
      <div>
        <ol>
          {list.map((task)=>(
            <>
            <li key={task.id}>{task.name}</li>
            <button onClick={()=>handledelete(task.id)}>delete</button>
            </>
          ))}
        </ol>
      </div>
      

    </div>
  )
}

export default ToDoList
