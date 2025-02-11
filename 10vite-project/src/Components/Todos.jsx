import React, { use } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoslice'

function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    

    return (
        <></>
    )
}

export default Todos
