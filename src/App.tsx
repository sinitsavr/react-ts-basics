import { useState } from 'react'
import { TodoItem } from './components/TodoItem'
import './App.css'
import { useTodos } from './hooks/useTodos'

export default function App() {
  const { todos, setTodos } = useTodos()      
  const [title, setTitle] = useState('')

  const addTodo = () => {
    if (!title.trim()) return

    setTodos(prev => [
      ...prev,
      { id: Date.now(), title, completed: false },
    ])

    setTitle('')
  }

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTodo()
  }

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h1>Todo List</h1>
      <div>
        <input
          value={title} // ✅ без String(title ?? '')
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="New task"
        />
        <button onClick={addTodo} disabled={!title.trim()}>Add</button>
      </div>

      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        ))}
      </ul>
    </div>
  )
}
