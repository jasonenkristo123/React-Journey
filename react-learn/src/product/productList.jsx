import { useEffect, useRef, useState } from "react";
import Product from "./product";


export default function ProductList() {
    const [products, setProduct] = useState([]);
    const isLoaded = useRef(false);

    useEffect(() => {
        if (isLoaded.current === false) {
            fetch("/products.json")
                .then((response) => response.json())
                .then((data) => setProduct(data))
                .then(() => isLoaded.current = true)
        }
    }, [])

    return (
        <>
            <h1>Product List</h1>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </>
    )
}