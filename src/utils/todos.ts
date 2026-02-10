import type { Todo } from '../types/todo'

export function toggleTodoById(todos: Todo[], id: number): Todo[] {
    return todos.map(t => t.id === id ? {...t, completed: !t.completed } : t)}

export function removeTodoById(todos: Todo[], id: number): Todo[]{
    return todos.filter(t=> t.id !==id) 
}