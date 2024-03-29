import { useState } from 'react';
import './App.css';
import MainPage from './page/MainPage';
import NavBar from './component/NavBar';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import PrivateRoute from './route/PrivateRoute';
//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1 네비게이션 바 만들기
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 상품디테일을 눌렀으나, 로그인이 안되어있으면 로그인으로 redirect해준다.
//5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 표시해준다.
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//7. 로그아웃이 되면 상품 디테일테이지를 볼 수 없다. 다시 로그인버튼이 보인다.
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.

function App() {

  let [authenticate, setAuthenticate] = useState(false)//로그인여부
  const [productList, setProductList] = useState([])

  
  
  return (
    <>
      
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      

        <Routes>
          <Route path="/" element={<MainPage productList={productList} />} />
          <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
          <Route path="/detail/:id" element={<PrivateRoute authenticate={authenticate}/>} />
        </Routes>
      
    </>
  );
}

export default App;
