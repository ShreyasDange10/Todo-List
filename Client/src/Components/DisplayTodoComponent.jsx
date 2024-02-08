import { useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import "./DisplayTodoComponent.css"
import { BsTrash3 } from "react-icons/bs";  
import { useSelector, useDispatch } from 'react-redux'
import { getTodo, deleteTodo, updateTodo } from '../Redux/TodoAction';

const DisplayTodoComponent = () => {

    const dispatch = useDispatch();
    const { tasks } = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(getTodo()); 
    }, [dispatch]);

    const handleDelete = (todoID) =>{
        dispatch(deleteTodo(todoID));  
    }

    const handleComplete = (todoID) =>{
        dispatch(updateTodo({id: todoID, complete: true }));
    }

    return (
        <Container>
            <div className="allTasks">
                {tasks.length > 0 ? tasks?.map((todo) => (
                    <div key={todo._id} className={`main d-flex justify-content-between ${todo.complete ? 'complete' : ''}`}>
                        <div>
                            <h5 className={todo.complete ? 'complete' : ''}><span>{todo.name}</span></h5>
                            <p className={todo.complete ? 'complete' : ''}>{todo.description}</p>
                        </div>
                        <div>
                            <div className="d-flex gap-2">
                                {!todo.complete && (
                                    <Button variant='outline-success' onClick={() => handleComplete(todo._id)}>
                                        Complete
                                    </Button>
                                )}
                                <Button className='delete' onClick={() => handleDelete(todo._id)}>
                                    <BsTrash3 />
                                </Button>
                            </div>
                        </div>
                    </div>
                )) : <p className='text-center mb-0 empty'>Add some tasks</p>}
            </div>
        </Container>
    )
}

export default DisplayTodoComponent
