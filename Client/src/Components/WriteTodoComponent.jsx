import { useState } from 'react'
import { Container, Button } from "react-bootstrap"
import "./WriteTodoComponent.css";
import { MdOutlineAdd } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../Redux/TodoAction';

const WriteTodoComponent = () => {
    const dispatch = useDispatch();

    const [task, setTask ] = useState({
        name: '',
        description: ''
    });

    const handleClick = () =>{
        dispatch(addTodo(task));
         setTask({
            name: '',
            description: ''
        });
    }

    const handleChange = (e) =>{
        setTask(prev=>({
            ...prev,[e.target.name]: e.target.value 
        }));
    }
  return (
    <>
        <Container className='taskContainer'>
            <div className="task">
                <input type="text" value={task.name} name="name" onChange={handleChange} placeholder='Enter Task' required/>
                <textarea onChange={handleChange} value={task.description} name="description" id="" cols="30" rows="1" placeholder='Enter Description' required></textarea>
                <Button className='add' onClick={handleClick}>Add<MdOutlineAdd /></Button>
            </div>
        </Container>
    </>
  )
}

export default WriteTodoComponent
