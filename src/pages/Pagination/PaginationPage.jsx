import { useLocation } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import "./paginationPage.css";
import { useState } from "react";
import AddModal from "../../components/AddModal/AddModal";


const PaginationPage = () => {
  //! Modal
  const [showModal, setShowModal] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)

  const location = useLocation();
  const { posts, search } = location.state || { posts: [], search: "" };
  // console.log(posts);

  const totalItems = posts.length
  const itemsPerPage = 10
  const[currentPage,setCurrentPage]  = useState(1)

  //! Kaç adet sayfa olacak
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  //! sayfadaki son post index
  const lastPost = currentPage * itemsPerPage; // 1 * 10(10)

  //! sayfadaki ilk post index
  const firstPost = lastPost - itemsPerPage; // 10 - 10 (0)

  //! mevcut sayfadaki gönderiyi ayarlıyoruz..
  const currentPosts = posts.slice(firstPost, lastPost); //postsun mesela ilk 10 u, 0 dan 9 a kadarki indekstekiler olacak gibi...
  
  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

//! Array(totalPages) ile bir dizi oluşturur, mesela totalpages 5 ise, 5 uzuluğunda boş bir dizi oluşturur. keys() metodu, bir dizinin indekslerini sırayla iterator eder. 5 uzunluğu için [0,1,2,3,4] gibi. Spread ile paket açılır ve sayılar bir diziye dönüştürülür.
// console.log([...Array(totalPages).keys()])

const handleModal = (post) => {
setSelectedPost(post)
setShowModal(true)
}
  return (
    <div className="results">
      {currentPosts.length ? (
        currentPosts.map((post) => (
          <div onClick={()=> handleModal(post)} className="result mb-5" key={post.id}>
            <h3>{post.title}</h3>
            <p>{`${post.body.substring(0,70)}...`}</p>
          </div>
        ))
      ) : (
        <div className="no-results">
          {`No search results available for - `}
          <span className="fs-4 text-primary">{search}</span>
          {` -.`}
          <img className="w-25" src="/img/noresult.gif" alt="" />
        </div>
      )}
      <Pagination className="d-flex justify-content-center">
       {/* //! Her sayfaya tıklandığında active durumu veriliyor */} 
        {[...Array(totalPages).keys()].map(number => (
          <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => handlePaginate(number + 1)}>
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      <AddModal
      show={showModal}
      onHide={() => setShowModal(false)}
      selectedPost={selectedPost}/>
    </div>
  );
};


export default PaginationPage;
