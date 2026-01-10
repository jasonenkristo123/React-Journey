import './index.css';

export default function HelloWorld() {
    const props = {
        text: "Hello Pemalas"
    }
    return (
        <div>
            <HeaderWorld {...props}/>
            <ParaWorld />
        </div>
    )
}

function HeaderWorld({text = "alamak"}) {
    return (
        <h1 className='text-3xl font-bold'>{text.toUpperCase()}</h1>
    )
}

function ParaWorld() {
    return (
        <p>kamu pasti bisa jago react</p>
    )
}