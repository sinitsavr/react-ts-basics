
import { TodoItem } from './components/TodoItem'
import { useTodos } from './hooks/useTodos'
import { AddTodoForm } from './components/AddTodoForm'

export default function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos()


  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h1>Todo List</h1>


      <AddTodoForm onAdd={addTodo} />

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
