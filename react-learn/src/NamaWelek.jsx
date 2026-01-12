import './index.css';
import { useState } from 'react';

export default function NamaWelek() {
    const [form, setForm] = useState({ name: "", age: ""});

    return (
        <div className='text-center '>
            <input value={form.name} placeholder='isi nama' onChange={(e) => setForm({...form, name: e.target.value})}
            className='bg-slate-900 text-white px-3 py-2 rounded-md m-5'/>
            <input value={form.age} placeholder='isi umur' onChange={(e) => setForm({...form, age: e.target.value})}
            className='bg-slate-900 text-white px-3 py-2 rounded-md '/>
            <div className='flex justify-center gap-10 '>
                <p>value nama sekarang: {form.name}</p>
                <p>value umur sekarang: {form.age}</p>
            </div>
        </div>
    )
}