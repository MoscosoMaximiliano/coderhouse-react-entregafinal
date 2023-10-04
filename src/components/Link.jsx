// eslint-disable-next-line react/prop-types
const Link = ({children}) => {
  return (
    <li className="inline-block px-5">
        <a href="" className="h-max transition ease-in-out delay-75 hover:bg-slate-700">{children}</a>
    </li>
  )
}

export default Link