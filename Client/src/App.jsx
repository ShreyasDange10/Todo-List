import './App.css'
import TodoNavbar from './Components/TodoNavbar'
import WriteTodoComponent from './Components/WriteTodoComponent'
import DisplayTodoComponent from './Components/DisplayTodoComponent'
import { store } from './Redux/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <div className='app' >
        <TodoNavbar/>
        <WriteTodoComponent/>
        <DisplayTodoComponent/>
      </div>
    </Provider>
  )
}

export default App
