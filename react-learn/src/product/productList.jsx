import { useEffect, useState } from "react";
import Product from "./product";
import '../index.css'

export default function ProductList() {
    const [products, setProduct] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        if (load) {
            fetch("/products.json")
                .then((response) => response.json())
                .then((data) => setProduct(data))
        }

        return () => {
            console.info("clean up");
        }
    }, [load])
    
    function handleClick() {
        if (load) {
            setProduct([]);
        }
        setLoad(!load);
    }

    return (
        <>
            <h1 className="font-bold">Product List</h1>
            <button className="border-2 rounded-md bg-slate-300 shadow-md px-3 py-2
            flex mx-auto font-semibold hover:opacity-70 " onClick={handleClick} >Load Product</button>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </>
    )
}