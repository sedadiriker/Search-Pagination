import { NavLink } from "react-router-dom"
import "./Menu.css"
const Menu = () => {
  return (
    <div className="navbar bg-body-tertiary">
      <ul className="no-list-style">

        <li>
          <NavLink className="text-decoration-none text-black btn li" to={"/"}>Home</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Menu
