import React from 'react'

export const TodoListItem = ({todos , handleDelete , handleToggle}) => {
    return (
        <>
            {
                todos.map( (todo, i) =>(
                    <li 
                        key={todo.id}
                        className='list-group-item'
                    >
                        <p   className={`${todo.done && 'complete'} `} onClick={()=>handleToggle(todo.id)}>{i+1}. {todo.desc}</p>
                        <button onClick={ ()=>handleDelete(todo.id) } className='btn-danger'>
                            Borrar
                        </button>
                    </li>  
                ))
            }
        </>
    )
}
