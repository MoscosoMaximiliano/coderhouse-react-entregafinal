import { useContext, useState } from "react"
import { InsertNewBuy } from "../../services/firebase/firebaseConfig"
import { CartContext } from "../provider/CartProvider"

const PaymentPage = () => {
  const {ClearCart, GetTotalPriceCart} = useContext(CartContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [orderID, setOrderID] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name,
      email,
      total: GetTotalPriceCart()
    }

    await InsertNewBuy(data).then(idOrder => {
      setOrderID(idOrder)
      ClearCart()
    })
  }
  return (
    <>
    {orderID === null ?
      <div className="items-center w-full p-12 h-max">
        <h1 className="self-center mb-12 text-center">Form&apos;s Payment</h1>
        <form action="" onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full gap-4">
          <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} className="p-2 border border-orange-400 rounded"/>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="p-2 border border-orange-400 rounded"/>

          <button type="submit" className="w-32 bg-orange-400 rounded">Complete Payment</button>
        </form>
        
        
      </div>
      : <p className="self-center my-24 text-5xl text-center just">You&apos;re payment ID is {orderID}</p> 
    }
    </>
  )
}

export default PaymentPage
