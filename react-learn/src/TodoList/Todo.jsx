import { useState } from "react";
import '../index.css'

export default function Todo({todo, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);

    let component;

    function handleChange(e) {
        const newNote = {...todo, text: e.target.value};
        onChange(newNote)
    }

    if (isEditing) {
        component = (
            <>
                <input type="text" onChange={handleChange} value={todo.text} />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        component = (
            <>
                {todo.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    function handleDone(e) {
        const newNote = {...todo, done: e.target.checked};
        onChange(newNote);
    }

    return (
        <div className="flex gap-4 justify-center">
            {component}
            <input type="checkbox" checked={todo.done} onChange={handleDone} />
            <button onClick={() => onDelete(todo)}>Delete</button>
        </div>
    )
}