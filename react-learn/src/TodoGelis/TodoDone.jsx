// list yang sudah selesai

import TodoItem from "./TodoItem";

export default function TodoDone({todos, onToggle, onDelete}) {
    return (
        <section className="max-w-3xl mx-auto space-y-6 p-6">
            <h2>Yang sudah dilakukan</h2>
            <div className="bg-slate-200 p-6 space-y-3 rounded-md shadow-xl border border-slate-700">
                {todos.map(todo => (
                    <TodoItem todos={todo} onToggle={onToggle} onDelete={onDelete} />
                ))}
            </div>
        </section>
    )
}