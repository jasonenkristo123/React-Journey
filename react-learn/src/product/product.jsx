import '../index.css'

export default function Product({product}) {
    return (
        <div className='bg-slate-900 rounded-md w-[190px] h-[190px] shadow-xl border-4 border-slate-400 '>
            <h2 className='text-center text-white'>{product.id} : {product.name}</h2>
            <p className='text-center text-white'>Harga Produk : {product.price}</p>
        </div>
    )
}