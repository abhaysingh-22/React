import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoslice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()                       //dispatch reducers ko use krte hue store mai value mai changes krta h 
        dispatch(addTodo(input))                //addTodo is the action creator
        setInput('')
        
    }
    return (
        <></>
    )
}

export default AddTodo
