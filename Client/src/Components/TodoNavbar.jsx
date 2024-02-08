import React from 'react'
import "./TodoNavbar.css"
import { Container } from 'react-bootstrap'

const TodoNavbar = () => {
  return (
            <Container>
      <nav className='navTodo'>
                <h3>My Todos</h3>
        </nav>
            </Container>
  )
}

export default TodoNavbar