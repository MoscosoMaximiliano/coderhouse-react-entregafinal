import {TiShoppingCart} from "react-icons/ti"

// eslint-disable-next-line react/prop-types
function CartWidget({itemsCartNumber}) {
  return (
    <div className="relative p-3">
        <TiShoppingCart className="h-12 w-12"/>
        <span className="absolute p-0.5 top-0 right-2 rounded-full bg-red-400 text-white">{itemsCartNumber}</span>
    </div>
  )
}

export default CartWidget