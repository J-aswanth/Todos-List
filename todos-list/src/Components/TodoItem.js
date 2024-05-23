import React from 'react'

function TodoItem({Todo , onDelete}) {
  return (
    <div>
        <h4>{Todo.title}</h4>
        <p>{Todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=> {onDelete(Todo)} }>Delete</button>
    </div>

  )
}
export default TodoItem
