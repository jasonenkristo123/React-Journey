
import '../index.css'
// bentuk tiap componen itemnya
export default function TodoItem({todos, onToggle, onDelete}) {
    return (
        <div className='flex justify-between rounded-md shadow-lg bg-gray-100 p-4'>
            <div>
                <p>{todos.text}</p>
                <p>{todos.date}</p>
            </div>

            <div>
                <button onClick={() => onToggle(todos)}>{todos.done ? "◀" : "✅"}</button>
                <button onClick={() => onDelete(todos)}>🗑</button>
            </div>
        </div>
    )
}