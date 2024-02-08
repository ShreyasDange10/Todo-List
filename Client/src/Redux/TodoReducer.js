import { addTodo, getTodo, updateTodo, deleteTodo } from "./TodoAction";
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        error:null, 
        loading:false, 
        tasks:[],
        complete:false
    },
    extraReducers:(builder) =>{
        builder.addCase(addTodo.pending, (state)=>{
            state.loading = true;
        })
        .addCase(addTodo.fulfilled, (state, action) =>{
            state.loading = false;
            state.tasks.push(action.payload)
        })
        .addCase(addTodo.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getTodo.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getTodo.fulfilled, (state, action)=>{
            state.loading = false;
            state.tasks = action.payload; 
        })
        .addCase(getTodo.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload
        })
        .addCase(updateTodo.pending, (state)=>{
            state.loading = false;
        })
        .addCase(updateTodo.fulfilled, (state, action)=>{
            console.log("action update", action.payload)
            state.loading = false;
            const index = state.tasks.findIndex(
                (todo) => todo._id === action.payload._id
            )
            console.log(index,"ind")
            state.tasks[index].complete = action.payload.complete 
        })
        .addCase(updateTodo.rejected, (state, action)=>{
            state.loading = true;
            state.error = action.payload;
        })
        .addCase(deleteTodo.pending, (state)=>{
            state.loading = true;
        })
        .addCase(deleteTodo.fulfilled, (state, action)=>{
            state.loading = false;
            const id= action.payload._id
            console.log(action.payload, 'reducerID');
            if(id){
                state.tasks = state.tasks.filter((task) => task._id !== id);
            }
        })
        .addCase(deleteTodo.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default todoSlice.reducer