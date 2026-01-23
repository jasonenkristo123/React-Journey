import Todo from "./Todo";

export default function TodoList({notes, onChange, onDelete}) {
    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <Todo note={note} onChange={onChange} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    )
}