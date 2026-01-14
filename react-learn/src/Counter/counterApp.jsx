import { useState } from "react";
import Counter from "./counter";

export default function CounterApp() {
    const [show, setShow] = useState(false);

    function handleChange(e) {
        setShow(e.target.checked);
    }

    return (
        <div>
            {show && <Counter/>}
            {show && <Counter/>}
            <input type="checkbox" value={show} onChange={handleChange}/> Tampil Counter 2
        </div>
    )
}