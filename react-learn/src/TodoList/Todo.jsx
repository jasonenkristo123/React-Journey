
import '../index.css'

export default function Todo({todo, onToggle, onDelete}) {
    return (    
        <div className="flex justify-between rounded-lg shadow-md bg-gray-50 p-4">
            <div>
                <p>{todo.text}</p>
                <p>{todo.date}</p>
            </div>

            <div className='space-x-2'>
                <button onClick={() => onToggle(todo)}>{todo.done ? "◀" : "✅"}</button>
                <button onClick={() => onDelete(todo)}>🗑</button>
            </div>
        </div>
    )
}