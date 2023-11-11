import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Item from "./Item"
import { GetFilteredProducts, GetProducts } from "../services/firebase/firebaseConfig"



// eslint-disable-next-line react/prop-types
function ItemListContainer() {
  const {categoryID} = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
        if (categoryID !== undefined) {
          GetFilteredProducts(categoryID).then(data => setProducts(data)).finally(() => setLoading(false))
        } else {
          GetProducts().then(data => setProducts(data)).finally(() => setLoading(false))
        }

        setLoading(false)
      
      
  }, [categoryID])

  return(
    <div className="grid grid-cols-3 gap-10 p-3 mx-12 overflow-x-hidden">
      { loading ? ( <h1>Loading Products</h1> )
      : products.map((item) => {
        return(
          <Item key={item.id} {...item}/>
        )
      })}
    </div>
  )
  
}

export default ItemListContainer