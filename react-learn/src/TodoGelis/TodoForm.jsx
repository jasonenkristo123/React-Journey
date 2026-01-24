// form yang mengirim data

import { useState } from "react";

export default function TodoForm({onAdd}) {
    const [todo, setTodo] = useState("");
    const [date, setDate] = useState("");

    function handleTodo(e) {
        setTodo(e.target.value);
    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!todo && !date) return;

        onAdd(todo, date);
        setTodo("");
        setDate("");
    }

    return (
        <article className="max-w-3xl mx-auto space-y-6 p-6">
            <section className="bg-slate-300 rounded-md shadow-lg p-6 border ">
                <h2 className="text-center font-bold ">Tambah Yang Mau Dilakukan</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <label htmlFor="todo" className="block text-sm mb-1 text-gray-500 font-light">Masukkan Hal Yang Mau Dikerjakan</label>
                        <input type="text" value={todo} name="todo" required placeholder="Add Todo List" 
                        className="w-full px-3 py-2 rounded-md border text-slate-900 border-slate-500  focus:outline-none focus:ring focus:bg-slate-200"
                        onChange={handleTodo}/>

                        <label htmlFor="date" className="block text-sm mb-1 text-gray-500 font-light">Masukkan Deadline Pengerjaan</label>
                        <input type="date" value={date} name="date" required placeholder="Add Todo List" 
                        className="w-full px-3 py-2 rounded-md  border border-slate-500 text-slate-900 focus:outline-none focus:ring focus:bg-slate-200"
                        onChange={handleDate}/>
                        <div className="text-right">
                            <button type="submit" className="rounded-md px-3 py-2 border border-r-slate-950 text-slate-50 font-bold bg-slate-500 hover:opacity-90 active:transform">Submit</button>
                        </div>
                    </div>
                </form>
            </section>
        </article>
    )
}