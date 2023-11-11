import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoResultPage } from "./components/pages/NoResultPage"
import CartProvider from './components/provider/CartProvider.jsx'
import { Cart } from "./components/Cart/PaidDetails";

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}/>
          <Route exact path='/category/:categoryID' element={<ItemListContainer/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
          <Route exact path="/cart" element={<Cart />}/>
          <Route exct path="*" element={<NoResultPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
