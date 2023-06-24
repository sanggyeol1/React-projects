import React from 'react';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg from './img/에어포스1.jpg'
import {data} from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'
import axios from 'axios'

let Context1 = createContext()//state보관함의 역할임

function App() {

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10,11,12])

  let navigate = useNavigate();
  let [load, setLoad] = useState();
  let [clickCount, setClickCount] = useState(0)
  let [noData, setNoData] = useState(false)


  return (
    <div className="App">

      <Navbar bg="" variant="" className="nav-bar">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='nav-menu' onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link className='nav-menu' onClick={()=>{ navigate('/detail/0') }}>Detail</Nav.Link>
            <Nav.Link className='nav-menu' onClick={()=>{ navigate('/event') }}>Event</Nav.Link>
            <Nav.Link className='nav-menu' onClick={()=>{ navigate('/about') }}>About</Nav.Link>
            <Nav.Link className='nav-menu' onClick={()=>{ navigate(-1) }}>뒤로</Nav.Link>
            <Nav.Link className='nav-menu' onClick={()=>{ navigate(1) }}>앞으로</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
         <> 
          <div className="main-bg" style={{backgroundImage : 'url('+ bg +')'}}></div>
          <Container>
          <Row>
            {
              shoes.map(function(a, i){
                return(
                  <Card shoes={shoes} i={i}></Card>
                )
              })
            }
          </Row>
          
        </Container> 
        {
          load == true ? <Loading/> : null
        }
        {
          noData == true ? <NoData/> : null
        }
        <button onClick={()=>{
          setLoad(true)
          if(clickCount == 0){
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((결과)=>{
              let copy = [...shoes, ...결과.data]
              setShoes(copy);
              setLoad(false)
              setClickCount(clickCount+1)
          })
            //get요청 실패 시
            .catch(()=>{
            console.log('실패함 ㅅㄱ')
            })
          }else if(clickCount == 1){
            axios.get('https://codingapple1.github.io/shop/data3.json')
            .then((결과)=>{
              let copy = [...shoes, ...결과.data]
              setShoes(copy);
              setLoad(false)
              setClickCount(clickCount+1)
          })
            //get요청 실패 시
            .catch(()=>{
            console.log('실패함 ㅅㄱ')
            })
          }else{
            setLoad(false)
            setNoData(true)
          }
          
          

        }}> 버튼 </button>
        </>
        }/>

{/* url파라미터 */}
        <Route path="*" element={<div>없는 페이지에요</div>} />
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />
        

        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<div>위치정보임</div>}></Route>
        </Route>

      </Routes>
    </div>
  );
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return(


    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){
  let shoeImage = [
    "https://codingapple1.github.io/shop/shoes1.jpg",
    "https://codingapple1.github.io/shop/shoes2.jpg",
    "https://codingapple1.github.io/shop/shoes3.jpg",
    "https://codingapple1.github.io/shop/shoes4.jpg",
    "https://codingapple1.github.io/shop/shoes5.jpg",
    "https://codingapple1.github.io/shop/shoes6.jpg",
    "https://codingapple1.github.io/shop/shoes7.jpg",
    "https://codingapple1.github.io/shop/shoes8.jpg",
    "https://codingapple1.github.io/shop/shoes9.jpg",
  ]

  return(
    <Col sm>
      <img src={shoeImage[props.i]} width="80%"></img>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
      <p>{props.shoes[props.i].price}</p>
    </Col>
  )
}

function Loading(props){
  return(
    <div className='alert alert-warning'>
      Loading ...
    </div>
  )
}
function NoData(props){
  return(
    <div className='alert alert-warning'>
      There Is No Data
    </div>
  )
}



export default App;
