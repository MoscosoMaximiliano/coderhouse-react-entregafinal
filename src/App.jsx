import NavBar from "./components/Navbar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CartProvider from './components/provider/CartProvider.jsx'
import { Cart } from "./components/Cart/PaidDetails";

import ItemListPage from "./components/pages/ItemListPage.jsx";
import NoResultPage from "./components/pages/NoResultPage"
import ItemDetailPage from "./components/pages/ItemDetailPage.jsx";
import PaymentPage from "./components/pages/PaymentPage.jsx";


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListPage />}/>
          <Route exact path='/category/:categoryID' element={<ItemListPage/>} />
          <Route exact path="/item/:id" element={<ItemDetailPage />}/>
          <Route exact path="/cart" element={<Cart />}/>
          <Route exact path="/payment" element={<PaymentPage />}/>
          <Route exct path="*" element={<NoResultPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
