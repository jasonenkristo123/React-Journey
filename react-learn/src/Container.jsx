import './index.css';

export default function Container({children}) {
    return (
        <div className='text-4xl '>
            <h1>Ini Container Yang Membungkus</h1>
            {children}
            <footer>Ini Juga Pembungkus Setelahnya</footer>
        </div>
    )
}