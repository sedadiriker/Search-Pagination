import { BrowserRouter, Routes , Route} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Pagination from "./pages/Pagination/Pagination";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
      <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/pagination" element= {<Pagination/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
