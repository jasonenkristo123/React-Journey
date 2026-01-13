import './index.css';
import { useState, useEffect } from 'react';

export default function FormHandle() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        

        if (!form.email || form.password) {
            alert("All fields Required");
            return
        }

        setForm({ email: "", password: ""});
    }

    return (
        <form className='text-center m-5'>
            <input type="email" name="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className='rounded-md bg-slate-800 text-white m-5 px-3 py-2' 
            placeholder='isi email'/>
            <input type="password" name="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value})} className='rounded-md bg-slate-800 text-white px-3 py-2' 
            placeholder='isi password' />
            <button type='submit' className='rounded-md bg-slate-900 text-white px-4 py-2 font-bold ml-5' onClick={handleSubmit}>Submit</button>
        </form>
    )
}

