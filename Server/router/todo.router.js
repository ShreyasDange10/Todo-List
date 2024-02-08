import { addTodo, getTodo, getSingleTodo, deleteTodo, updateTodo } from "../controller/todo.controller";
import express from "express";

const trouter = express.Router();

trouter.post('/add-todo', addTodo);
trouter.get('/get-todo', getTodo);
trouter.get('/get-single-todo/:todoID', getSingleTodo);
trouter.delete('/delete-todo/:todoID', deleteTodo);
trouter.patch('/update-todo/:todoID', updateTodo);

export default trouter;
