import { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import '../App.css';
import React from 'react';

function Detail(props){
  // mount , update 시 html랜더링 이후 코드 실행(html로드가 빠름)
  //어렵거나 복잡한 연산, 서버에서 데이터 가져오는 작업, 타이머 등등
  let [입력값, 입력값변경] = useState('');
  let [warn, setWarn] = useState(false)
  let [alert, setAlert] = useState(true)
  let [count, setCount] = useState(0);
  let navigate = useNavigate();
  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  })

  //버튼을 누르면 state를 바꾸는 스위치만 조정하는 방식으로 하면 코드가 깔끔해짐!
  let [tab, setTab] = useState(0);

    
  useEffect(()=>{
    // let a = setTimeout(()=>{ setAlert(false) }, 2000)
    if(isNaN(입력값)==true){
      setWarn(true)
    }else{
      setWarn(false)
    }

    // return ()=>{
    //   //useEffect코드 실행전에 실행되는 코드
    //     clearTimeout(a)
    // }
  }, [입력값, count, alert])


    return(
<div className="container">
  <div className="test">test this</div>
    {
      alert == true ?
      <div className='alert alert-warning'>
        2초이내 구매시 할인
      </div> : null
    }

  {/* {count}
  <button onClick={()=>{ setCount(count+1)}}>버튼</button> */}
  <div className="row">
    <div className="col-md-6">
      <img src={찾은상품.src} width="60%" />
    </div>
    
    {
      warn == true ? <Warn/> : null
    }

    <div className="col-md-6">
      <h4 className="pt-5">{찾은상품.title}</h4>
      <p>{찾은상품.content}</p>
      <p>{찾은상품.price}</p>
      <input onChange={(e)=>{
    입력값변경(e.target.value)
   }}></input><br></br><br></br>   
   <button className="btn btn-danger">주문하기</button><br></br><br></br>   
      
    </div>
  </div>

  <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link"  href="#" onClick={()=>{setTab(0)}}>버튼1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" onClick={()=>{setTab(1)}}>버튼2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" onClick={()=>{setTab(2)}}>버튼3</a>
  </li>
  </ul>

  {
    <Tab tab={tab}/>
  }
  

    <button onClick={()=>{navigate('/detail/0')}}>0</button>
    <button onClick={()=>{navigate('/detail/1')}}>1</button>
    <button onClick={()=>{navigate('/detail/2')}}>2</button>
</div> 
  )
}


function Tab(props){

    return (<div>{[<div className="start end">1번 정보</div>,<div className="start end">2번 정보</div>,<div className="start end">3번 정보</div>][props.tab]}</div>)
    

}



function Warn(props){
  return(
    <div className='alert alert-warning'>
      숫자만 입력 가능합니다.
    </div>
  )
}
 




export default Detail;
