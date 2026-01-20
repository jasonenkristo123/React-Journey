import { useContext, useRef, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";


export default function NoteForm() {
    const [text, setText] = useState("");
    const dispatch = useContext(NotesDispatchContext);
    const noteInput = useRef(null);

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            handleClick();
        }
    }

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() {
        setText("");
        dispatch({
            type: "ADD_NOTE",
            text: text
        })
        noteInput.current.focus();
    }

    return (
        <>
            <input ref={noteInput} placeholder="Add Note" onChange={handleChange} value={text} onKeyDown={handleKeyDown} />
            <button onClick={handleClick}>Add</button>
        </>
    )
}