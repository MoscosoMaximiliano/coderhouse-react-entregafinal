import { useParams } from "react-router-dom"
import DATA from "../products"
import { useEffect, useState } from "react"
import Item from "./Item"

// eslint-disable-next-line react/prop-types
function ItemListContainer() {
  const {categoryID} = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
        if (categoryID !== undefined) {
          const filteredProducts = DATA.filter((item) => item.category === categoryID)
            setProducts(filteredProducts)
        } else {
          setProducts(DATA)
        }

        setLoading(false)
      }, 3000)
      
      
  }, [categoryID])

  return(
    <div className="overflow-x-hidden mx-12 p-3 grid-cols-3 grid gap-10">
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