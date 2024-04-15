import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import "./Menu.css";
const Menu = () => {
  const location = useLocation();

  return (
    <div className="navbar bg-body-tertiary d-flex justify-content-between px-5">
      {location.pathname === '/pagination' ? (
        <>
          <h2 className="title">
            <span className="blue">S</span>
            <span className="red">E</span>
            <span className="yellow">A</span>
            <span className="blue">R</span>
            <span className="green">C</span>
            <span className="red">H</span>
          </h2>
          <ul className="no-list-style">
            <li>
              <NavLink className="text-decoration-none text-black btn btn-primary text-white" to={"/"}>Home</NavLink>
            </li>
          </ul>
        </>
      ) : (
        <ul className="no-list-style">
          <li>
            <NavLink className="text-decoration-none text-black btn btn-primary text-white" to={"/"}>Home</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
