import { useContext } from "react"
import { CartContext } from "../provider/CartProvider"
import { AiFillDelete } from 'react-icons/ai'
import { EmptyCart } from "./EmptyCart"
import { Payment } from "./Payment"


export const Cart = () => {
  const {cart, RemoveItemFromCart, CartItemAmount} = useContext(CartContext)

  const getTotalPrice = () => cart.reduce((accumulated, {price, quantity}) => accumulated + price * quantity, 0)

  const deleteItemHandler = (id) => RemoveItemFromCart(id)

  return (
    // CartItemAmount() !== 0 ?
    <div className="flex flex-col justify-center m-2">
      {cart.map((item) => {
        return (
          <div key={item.id} className="flex flex-wrap items-center justify-between p-5 border rounded bg-slate-500">
            <img src="" alt="IMAGE" />
            <div>
              <p className="text-lg font-bold">{item.productName}</p>
              {item.description}
            </div>
            <div className="flex flex-col items-center text-center">
              <p>Quantity: {item.quantity}</p>
              <p>TOTAL: {item.price * item.quantity}</p>
            </div>
            <button onClick={() => deleteItemHandler(item.id)}>
              <AiFillDelete className="w-10 h-10 text-red-500 rounded bg-slate-800"/>
            </button>
          </div>
        )
      })}
      <div className="flex self-center justify-center py-4 my-3 text-black bg-orange-300 rounded w-60 ">
        <h2 className="w-fit">The total is: ${getTotalPrice()}</h2>
      </div>
      <Payment />
    </div> 
    // : <EmptyCart />
    
  )
  
}
