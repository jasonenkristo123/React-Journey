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
        setLoad(true);
    }

    return (
        <div className="flex flex-row flex-wrap gap-6 m-6">
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Product</button>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}