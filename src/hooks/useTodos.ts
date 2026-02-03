import { useEffect, useState } from "react";       
import { Todo } from "../types";
export function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([])
    // Загружаем данные из localStorage при инициализации
    useEffect(() => {
        const savedTodos = localStorage.getItem('todos')
        
        if (savedTodos) {
            try {
                const parsedTodos: Todo[] = JSON.parse(savedTodos)
                setTodos(parsedTodos)
            } catch (error) {
                console.error('Error parsing todos from localStorage:', error)
            }
        }
    }, [])
    // Сохраняем данные в localStorage при изменении todos
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    return { todos, setTodos }
}