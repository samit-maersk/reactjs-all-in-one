import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../../todoSlice'
import Todo from './Todo'

const Todos = () => {
    const todos = useSelector((state) => state.todos.value)
    const dispatch = useDispatch()
    const [todo,setTodo] = useState({id:0,item:''});
    const handleSubmit = ()=>{
        dispatch(add(todo))
        setTodo({id:0,item:''})
    }

    return(
        <>
            <input type="text" name="item" value={todo?.item} onChange={(e)=>setTodo({id: todos.length+1, [e.target.name]: e.target.value})}></input>
            <button onClick={handleSubmit} disabled={todo.id === 0}>Add</button>
            <ol>
                { todos.map((todo) => <Todo key={todo.id} todo={todo}/> ) }
            </ol>
        </>
    )
}
export default Todos;