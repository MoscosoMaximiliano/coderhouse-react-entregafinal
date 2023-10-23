import { useState } from "react"
import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoResultPage } from "./components/NoResultPage"

function App() {
  const [itemsOnCart, setItemsOnCart] = useState(3)

  const AddItemToCart = () => setItemsOnCart(itemsOnCart + 1)

  return (
    <BrowserRouter>
      <NavBar itemCartNumber={itemsOnCart}/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path='/category/:categoryID' element={<ItemListContainer/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
        <Route exct path="*" element={<NoResultPage />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
