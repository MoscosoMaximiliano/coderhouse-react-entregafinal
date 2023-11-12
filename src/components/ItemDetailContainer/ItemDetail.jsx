import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../provider/CartProvider"
import { ItemQuantitySelector } from "./ItemQuantitySelector"
import { GetDetailProduct } from "../../services/firebase/firebaseConfig"

export const ItemDetail = () => {
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(0)
    const {AddItemToCart} = useContext(CartContext)
    const { id } = useParams()

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

    useEffect(() => {
        GetDetailProduct(id).then(data => data.length !== 0 ? setProduct({id: id, ...data}) : setProduct(data))
    }, [id])

    const SendItemToCart = () => AddItemToCart(product, quantity)

    return(
        <div
        className="flex flex-col max-w-sm p-6 overflow-hidden rounded bg-slate-500">
            <img src="" alt="IMAGE" className="w-full"/>
            <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold text-center">{product.productName}</div>
                <p className="mb-5 wrap">{product.description}</p>
                <p><b>Price</b>: ${product.price}</p>
                <p><b>Stock</b>: {product.stock}</p>
            </div>
            <ItemQuantitySelector increase={handleQuantityIncrease} decrease={handleQuantityDecrease} quantity={quantity}/>
            <p className="text-center"><b>Total Price</b>: ${product.price * quantity}</p>
            <Link className="items-center w-auto p-2 mx-2 my-2 text-center bg-orange-300 rounded-full hover:bg-orange-400" to={"/"} onClick={SendItemToCart}>Add to cart</Link>
        </div>
    )
}
