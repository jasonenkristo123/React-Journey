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
            <input value={text} placeholder="Add Note" onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
        </>
    )
}