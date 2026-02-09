import { useState } from 'react'
import { TodoItem } from './components/TodoItem'
import { useTodos } from './hooks/useTodos'

export default function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos()
  const [title, setTitle] = useState('')

  const submit = () => {
    addTodo(title)
    setTitle('')

  }
  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h1>Todo List</h1>
      <div>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && submit()}
          placeholder="New task"
        />
        <button onClick={submit} disabled={!title.trim()}>Add</button>
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
