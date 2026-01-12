import './index.css';
import { useState } from 'react';

export default function NamaWelek() {
    const [name, setName] = useState("");

    return (
        <div className='text-center'>
            <input value={name} placeholder='isi nama' onChange={(name) => setName(name.target.value)}
            className='bg-slate-900 text-white px-3 py-2 rounded-md '/>
            <p>value nama sekarang: {name}</p>
        </div>
    )
}