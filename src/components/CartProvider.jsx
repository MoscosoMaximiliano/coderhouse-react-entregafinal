import { useContext, useState } from 'react'

export const CartContext = useContext(null)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([{},{}])

    const CartItemAmount = () => cart.length

    return (
    <CartContext.Provider value={{cart, setCart, CartItemAmount}} >
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider