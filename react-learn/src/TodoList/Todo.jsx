import { useState } from "react";

export default function Todo({note, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);

    let component;

    function handleChange(e) {
        const newNote = {...note, text: e.target.value};
        onChange(newNote)
    }

    if (isEditing) {
        component = (
            <>
                <input type="text" onChange={handleChange} value={note.text} />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        component = (
            <>
                {note.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    function handleDone(e) {
        const newNote = {...note, done: e.target.checked};
        onChange(newNote);
    }

    return (
        <>
            {component}
            <input type="checkbox" checked={note.done} onChange={handleDone} />
            <button onClick={() => onDelete(note)}>Delete</button>
        </>
    )
}