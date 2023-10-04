import { useState } from "react"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  const [itemsOnCart, setItemsOnCart] = useState(0)

  const AddItemToCart = () => setItemsOnCart(itemsOnCart + 1)

  return (
    <>
      <NavBar itemCartNumber={itemsOnCart}/>
      <ItemListContainer greetings={"Welcome to my page"} />
    </>
  )
}

export default App
