import { useState } from "react";


export default function NoteForm({onAddNote}) {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() {
        setText("");
        onAddNote(text);
    }

    return (
        <>
            <input placeholder="Add Note" onChange={handleChange} value={text} />
            <button onClick={handleClick}>Add</button>
        </>
    )
}