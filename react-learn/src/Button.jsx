import './index.css';
import { useEffect, useState } from 'react';

export default function Button() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`jumlah di klik: ${count}`);
    }, [count]);

    return (
        <div className='text-center text-3xl'>
            <p>value: {count}</p>
            <button className='rounded-md bg-slate-800 text-white px-3 py-2 m-4' 
            onClick={() => setCount(count + 1)}>Increment</button>
            <button className='rounded-md bg-slate-800 text-white px-3 py-2' 
            onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

