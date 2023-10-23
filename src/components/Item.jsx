import { Link } from "react-router-dom"

function Item(item) {
  return (
    <div
    className="p-6 bg-slate-500 flex flex-col max-w-sm rounded overflow-hidden">
      <img src="" alt="IMAGE" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.productName}</div>
        <p>Price: ${item.price}</p>
      </div>
      <div className="px-6 pt-5 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{item.category}
        </span>
      </div>
        <Link className="w-auto rounded-full bg-orange-300 items-center text-center p-2 my-2 mx-2" to={`/item/${item.id}`}>Details</Link>
    </div>
  )
}

export default Item