import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Todo ={
  id: number
  title: string
  compaleted: boolean
}


function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState('')
  const addTodo = () => {
    if (!title.trim()) return 

    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        title,
        compaleted: false, 
      },
    ])
    setTitle('')
  }
const  toggleTodo = (id: number) => {
  setTodos(prev => 
    prev.map (todo =>
      todo.id === id 
      ? {...todo, complated: !todo.complated }
      : todo
    )
  )
}
const removeTodo = (id: number) => {
  setTodos (prev => prev.filter(todo => todo.id !==id))
}

  return (
    <div style={{ padding: 20, maxWidth: 400}}>
      <h1>Todo List</h1>

      <div>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='New task'
        />
        <button onClick={addTodo}>Add</button>       
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
          <label>
            <input 
              type='checkbox'
              checked={todo.complated}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.complated ? 'line-through' : 'none', 
              marginLeft: 8
             }}>
             {todo.title}
            </span>
          </label>

          <button onClick={ () => removeTodo(todo.id)}>❌</button>
          </li>
            ))}
      </ul>
            </div>
  
        )
}

export default App
