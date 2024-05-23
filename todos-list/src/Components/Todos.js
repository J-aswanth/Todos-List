import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {

  return (
    <div className="container">
      <h3 className=" my-3">Todos List</h3>

      {props.todos.length === 0 ? "No Todos to display" : 
      props.todos.map((x)=>{
        return (
         <>  
            <TodoItem  Todo = {x} key={props.todos.sno} onDelete={props.onDelete}/>
            <hr></hr>
         </> 
        )

      })}

    
      
  
    </div>
  )
}

export default Todos
