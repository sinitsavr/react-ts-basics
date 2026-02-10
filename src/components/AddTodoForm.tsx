import { useState } from 'react'

type AddTodoFormProps = {
    onAdd: (title: string) => void
}
export function AddTodoForm({ onAdd }: AddTodoFormProps) {
    const [title, setTitle] = useState('')

    const submit = () => {
        onAdd(title)
        setTitle('')
    }
    return (
        <div style={{ display: 'flex', gap: 8 }}>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && submit()}
                placeholder='New task'
            />
            <button onClick={submit} disabled={!title.trim()}>
                Add
            </button>
        </div>
    )
}
