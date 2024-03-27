import Aboutpage from './page/Aboutpage';
import Homepage from './page/Homepage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import Login from './page/Login';
import Mypage from './page/Mypage';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from 'react';

function App() {
  const [authentication, setAthentication] = useState(false)

  const PrivateRoute = () => {
    return authentication == true ? <Mypage/> : <Navigate to="/login"/>
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<Aboutpage />}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/product/:id/:num" element={<ProductDetailPage />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/mypage" element={<PrivateRoute/>}/>
      </Routes>


    </>
  );
}

export default App;
