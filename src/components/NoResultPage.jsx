import { Link } from "react-router-dom"

export const NoResultPage = () => {
  return (
    <div className="flex flex-col text-center w-full">
        <h1>Work in progress, please be patient</h1>
        <Link className="w-auto rounded-full bg-orange-300 items-center text-center p-2 my-2 mx-2" to={`/`}>
            Go back!
        </Link>
    </div>
  )
}
