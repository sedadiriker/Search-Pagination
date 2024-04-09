import "./Home.css"
import { IoSearchOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="home">
      <h2 className="title">
        <span className="blue">S</span>
        <span className="red">E</span>
        <span className="yellow">A</span>
        <span className="blue">R</span>
        <span className="green">C</span>
        <span className="red">H</span>
      </h2>

      <form className="w-100  d-flex justify-content-center align-items-center gap-3 mt-5 position-relative">
        <input className="search w-50 py-2 px-5 " type="search" name="search" id="search" />
        <IoSearchOutline className="search-icon" />

        <button className=" btn btn-success py-2 px-4">Search</button>
      </form>
    </div>
  )
}

export default Home
