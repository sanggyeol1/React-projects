import {Button,Container,Nav,Navbar,Row,Col} from 'react-bootstrap';
import './App.css';
import { lazy,useEffect, useState } from 'react';
import { data } from './data.js'
import { Detail } from './pages/detail';
import { Cart } from './pages/Cart'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import axios from 'axios';
import { useQuery } from 'react-query';




function App() {

  useEffect(()=>{
    let 꺼낸거 = localStorage.getItem('watched')
    if(!꺼낸거){
      localStorage.setItem('watched', JSON.stringify([]))
    }
    
  },[])


  let [shoes, setShoes] = useState(data)
  let [click, setClick] = useState(0)
  let [loading, setLoading] = useState(false)
  let navigate = useNavigate()
  
  let result = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{
      console.log('요청됨')
      return a.data
    })
    .catch((err)=>{console.log(err)}),
    { staleTime : 2000 }
  )


  return (
    <div className="App">

    

      <Navbar className='nav-bar' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">상결신발</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/Cart')}}>Cart</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            { result.isLoading && '로딩중'}
            { result.error && '에러'}
            { result.data && result.data.name}
            
          </Nav>
        </Container>
      </Navbar>

     

      <Routes>
        <Route path="/" element={
        <>
          <div className='main-bg'></div>
          <Container>
          <Row>
            {
              shoes.map((a, i)=>{
                return(
                  <Card shoes={shoes[i]} i={i}/>
                )
              })
            }
          </Row>
          </Container>
          {
            loading == true ? 
            <div className="alert alert-warning">
              로딩중입니다.
            </div> : null
          }
          <button onClick={()=>{
            if(click == 0){
              setLoading(true)
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{ 
                let copy = [...shoes, ...result.data]
                setShoes(copy)
                setLoading(false)
              })
              .catch((err)=>{
                console.log(err)
              })
              setClick(click+1)
            }else if(click == 1){
              setLoading(true)
              axios.get('https://codingapple1.github.io/shop/data3.json')
              .then((result)=>{ 
                let copy = [...shoes, ...result.data]
                setShoes(copy)
                setLoading(false)
              })
              .catch((err)=>{
                console.log(err)
              })
              setClick(click+1)
            }else{
              alert('데이터 더 없음')
            }
          }}>더보기</button>


        </>
      }/>
      
        <Route path="/detail/:id" element={ <Detail shoes={shoes}/> }/>

        <Route path="/cart" element={ <Cart/> }/>

        <Route path="*" element={ <div>없는페이지에요</div> }/>
      </Routes>
    </div>
  );
}

function Card(props){

  let navigate = useNavigate()
  return(
          <Col>
          
            <img src={"https://codingapple1.github.io/shop/shoes"+(props.shoes.id+1)+".jpg"} width="300px"  onClick={()=>{ navigate('/detail/'+props.shoes.id)}}/>
          <div style={{textAlign : 'left'}}>
            <h4 >{props.shoes.title}</h4>
            <p >{props.shoes.price}</p>
          </div>
          </Col>
  )
}

export default App;
