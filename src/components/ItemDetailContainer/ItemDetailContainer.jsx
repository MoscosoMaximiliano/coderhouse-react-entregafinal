import { useParams } from 'react-router-dom'
import DATA from '../../products'
import { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'

const ItemDetailContainer = () => {
  const {id} = useParams()

  const [product, setProduct] = useState()

  useEffect(() => {
    const filteredData = DATA.filter((item) => item.id == id)
    setProduct(filteredData.length !== 0 ? filteredData[0] : null)
  }, [id])
  
  return (
    <div className='flex my-6 justify-center'>
      <ItemDetail {...product}/>
    </div>
      
  )
}

export default ItemDetailContainer