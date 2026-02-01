import { Todo } from '../types'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

export function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            marginLeft: 8,
          }}
        >
          {todo.title}
        </span>
      </label>

      <button onClick={() => onRemove(todo.id)}>❌</button>
    </li>
  )
}