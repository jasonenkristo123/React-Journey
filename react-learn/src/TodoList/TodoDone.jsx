import Todo from "./Todo";

export default function TodoDone({todos, onToggle, onDelete}) {
    return (
        <section id="done-list" className="md:max-w-3xl mx-auto space-y-6 py-6 max-w-sm lg:max-w-4xl">
            <h2>Yang Sudah Dilakukan</h2>

            <div className="bg-slate-200 p-6 rounded-lg shadow-xl border border-slate-500">
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
                ))}
            </div>
        </section>
    )
}