import { createSlice, nanoid } from "@reduxjs/toolkit";  // nanoid is used to generate unique id

const initialState = {
    todos: [{id: '1', text: 'hello world', completed: false}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {             // state give the current state of the store   // action is the payload
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }         
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
        }, 
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;  // reducer is exported