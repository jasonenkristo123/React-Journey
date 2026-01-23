import { useState } from "react";
import '../index.css';

export default function TodoForm({onAddNote}) {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() {
        setText("");
        onAddNote(text);
    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    return (
        <main className="max-w-2xl mx-auto space-y-6 py-6">
            <section className="bg-slate-200 p-6 rounded-lg shadow-md">
            <h2 className="text-center mb-4 font-semibold">Tambah Yang Harus Dilakukan</h2>
            <form className="space-y-4">
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
                        <button className="text-slate-800 font-bold border px-3 py-2 rounded-lg bg-slate-200 " onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </form>
            </section>
        </main>
        
    )
}