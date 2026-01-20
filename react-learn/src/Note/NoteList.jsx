import { useContext, useMemo, useRef, useState } from 'react';
import Note from './Note';
import { NotesContext } from './NoteContext';

export default function NoteList() {
    const notes = useContext(NotesContext);
    const [search, setSearch] = useState("");
    const searchInput = useRef(null);

    const filteredSearch = useMemo(() => {
        return notes.filter(note => note.text.includes(search));
    }, [notes, search]);

    function handleClick() {
        setSearch(searchInput.current.value);
    }

    return (
        <div>
            <input ref={searchInput} type="text" placeholder='search note' />
            <button onClick={handleClick}>Search</button>
            <ul>
            {filteredSearch.map(note => (
                <li key={note.id}>
                    <Note note={note} />
                </li>
            ))}
            </ul>
        </div>
    )
}