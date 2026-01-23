import { useState } from "react";
import '../index.css';

export default function TodoForm({onAddNote}) {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!text && !date) return;

        
        onAddNote(text, date);
        setText("");
        setDate("");
    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    return (
        <main className="md:max-w-3xl mx-auto space-y-6 py-6 max-w-sm lg:max-w-4xl">
            <section className="bg-slate-100 p-6 rounded-lg shadow-xl border border-slate-500">
            <h2 className="text-center mb-4 font-bold">Tambah Yang Harus Dilakukan</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div >
                    <label htmlFor="todo" className="block text-sm font-light text-slate-700 mb-1">Masukkan hal yang dilakukan</label>  
                    <input 
                    className="w-full px-3 py-1 focus:outline-none focus:ring-2 rounded-md text-slate-700 border-slate-900
                    border focus:bg-slate-300 " 
                    type="text" value={text} onChange={handleChange} placeholder="Add Todo"/>

                    <label htmlFor="date" className="block text-sm font-light text-slate-700 mb-1 mt-3">Masukkan tanggal due</label>
                    <input 
                    className="w-full px-3 py-1 focus:outline-none focus:ring-2 rounded-md text-slate-700 border-slate-900
                    border focus:bg-slate-300 " 
                    type="date" value={date} onChange={handleDate} placeholder="Add Todo"/>
                    <div className="mt-4 text-right">
                        <button className="text-slate-800 font-bold border px-3 py-2 rounded-lg bg-slate-200 " >Submit</button>
                    </div>
                </div>
            </form>
            </section>
        </main>
        
    )
}