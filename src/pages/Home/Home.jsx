import { useState } from "react";
import "./Home.css";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]); 
  const navigate = useNavigate()
  // console.log(search)

  const getSearchResult = async () => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    if (!search.trim()) {
      Swal.fire({
        title: 'Search Term Required!',
        text: 'Please enter something to search and try again.',
        icon: 'warning',
        confirmButtonText: 'Ok'
      });
      return;
    }
    try {
      const res = await axios(URL);
      const { data } = res;
      const filtereddata = data.filter(post => post.title.includes(search) || post.body.includes(search))
      setPosts(filtereddata)
      navigate("/pagination", { state: { posts: filtereddata,search } })
    } catch (err) {
      console.log(err);
    }

  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if(search.trim()) { 
      getSearchResult();

    }
  };

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

      <form className="w-100  d-flex justify-content-center align-items-center gap-3 mt-5 position-relative" onSubmit={handleSubmit}>
        <input
          className="search w-50 py-2 px-5 "
          value={search}
          type="search"
          name="search"
          id="search"
          onChange={handleSearchChange}
        />
        <IoSearchOutline className="search-icon" />
        <button type="submit" onClick={getSearchResult} className=" btn btn-success py-2 px-4">Search</button>
      </form>
      <p className="text-center ms-5 opacity-50">Example Search : optio</p>
    </div>
  );
};

export default Home;
