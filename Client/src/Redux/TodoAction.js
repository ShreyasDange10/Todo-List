import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const addTodo = createAsyncThunk('addTodo', async(payload, {rejectWithValue})=>{
    const response = await axios.post(`http://localhost:3007/todo/add-todo`, payload);
    try {
        const result = response.data.data
        return result
    } catch (error) {
        return rejectWithValue(error);        
    }
});

export const getTodo = createAsyncThunk('getTodo', async(payload, {rejectWithValue})=>{
    const response = await axios.get('http://localhost:3007/todo/get-todo');
    try {
        const result = response.data.data
        return result
    } catch (error) {
        return rejectWithValue(error);        
    }
});

export const updateTodo = createAsyncThunk('updateTodo', async(payload, {rejectWithValue})=>{
    console.log(payload, "update payload")
    const response = await axios.patch(`http://localhost:3007/todo/update-todo/${payload?.id}`, payload);
    try {
        const result = response.data.data
        return result
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteTodo = createAsyncThunk('deleteTodo', async(payload, {rejectWithValue})=>{
    const response = await axios.delete(`http://localhost:3007/todo/delete-todo/${payload}`);
    try {
        const result = response.data.data
        return result 
    } catch (error) {
        return rejectWithValue(error);
    }
});

