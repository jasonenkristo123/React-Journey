import Todo from "./Todo";

export default function TodoList({todos, onChange, onDelete}) {
    return (
        <ul className="text-slate-800">
            {todos.map(todo => (
                <li key={todo.id}>
                    <Todo todo={todo} onChange={onChange} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    )
}