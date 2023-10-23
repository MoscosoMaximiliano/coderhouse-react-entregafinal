import { useState } from "react"
import { Link } from "react-router-dom"

export const ItemDetail = (product) => {
    const [quantity, setQuantity] = useState(0)

    const handleQuantityIncrease = () => {        
        const result = quantity + 1
        if(result<= product.stock) {
            setQuantity(result)
        }
    }

    const handleQuantityDecrease = () => {
        const result = quantity - 1
        if(result >= 0) {
            setQuantity(result)
        }
    }

    return(
        <div
        className="p-6 bg-slate-500 flex flex-col max-w-sm rounded overflow-hidden">
            <img src="" alt="IMAGE" className="w-full"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{product.productName}</div>
                <p className="mb-5 wrap">{product.description}</p>
                <p><b>Price</b>: ${product.price}</p>
                <p><b>Stock</b>: {product.stock}</p>
            </div>
            <div className="flex justify-center items-center">
                <button className="rounded p-5 bg-orange-300" onClick={handleQuantityDecrease}>-</button>
                <h1 className="px-2">{quantity}</h1>
                <button className="rounded p-5 bg-orange-300" onClick={handleQuantityIncrease}>+</button>
            </div>    
            <p className="text-center"><b>Total Price</b>: ${product.price * quantity}</p>
            <Link className="w-auto rounded-full bg-orange-300 items-center text-center p-2 my-2 mx-2" to={`/item/${product.id}`}>Add to cart</Link>
        </div>
    )
}
