import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetailContainer/ItemDetail'
import { GetDetailProduct } from "../../services/firebase/firebaseConfig"
const ItemDetailPage = () => {
  const {id} = useParams()

  const [product, setProduct] = useState()

  useEffect(() => {
    GetDetailProduct(id).then(data => data.length !== 0 ? setProduct({id: id, ...data}) : setProduct(data))
  }, [id])
  
  return (
    <div className='flex justify-center my-6'>
      <ItemDetail {...product}/>
    </div>
      
  )
}

export default ItemDetailPage