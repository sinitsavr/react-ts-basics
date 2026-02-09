import { useState, useEffect } from 'react'
import type { Todo } from '../types/todo'

const STORAGE_KEY = 'todos'

function loadTodos(): Todo[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? (JSON.parse(saved) as Todo[]) : []
  } catch {
    return []
  }
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(loadTodos)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
  const addTodo = (title: string) => {
    const trimmed = title.trim()
    if (!trimmed) return

    const newTodo: Todo = {
      id: Date.now(),
      title: trimmed,
      completed: false,
    }
    setTodos(prev => [...prev, newTodo])
  }
    const toggleTodo = (id: number) => {
      setTodos(prev =>
        prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
      )
    }
    const removeTodo = (id: number) => {
      setTodos(prev => prev.filter(t => t.id !== id))
    }
    const clearCompleted = () => {
      setTodos(prev => prev.filter(t => !t.completed))
    }
    return { todos, addTodo, toggleTodo, removeTodo, clearCompleted }
  }


