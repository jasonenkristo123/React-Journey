import { useEffect, useRef, useState } from "react";
import Product from "./product";
import '../index.css'

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
        <div className="flex flex-row flex-wrap gap-6 m-6">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}