import {configureStore} from '@reduxjs/toolkit';  //way to crete store
import todoReducer from '../features/todoslice';  //importing reducer
export const store = configureStore({             // //store is created
    reducer: todoReducer
});  