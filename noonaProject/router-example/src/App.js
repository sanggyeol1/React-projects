import Aboutpage from './page/Aboutpage';
import Homepage from './page/Homepage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import './App.css';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        
        <Route path="/about" element={<Aboutpage />}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/product/:id/:num" element={<ProductDetailPage />}/>
      </Routes>


    </>
  );
}

export default App;
