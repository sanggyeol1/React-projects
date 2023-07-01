import { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { addItem } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import './../App.css';




function Detail(props){
    let dispatch = useDispatch()


  // mount , update 시 html랜더링 이후 코드 실행(html로드가 빠름)
  //어렵거나 복잡한 연산, 서버에서 데이터 가져오는 작업, 타이머 등등
  let [입력값, 입력값변경] = useState('');
  let [warn, setWarn] = useState(false)
  let [alert, setAlert] = useState(true)
  let [count, setCount] = useState(0);
  let navigate = useNavigate();
  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){return x.id == id})
  //버튼을 누르면 state를 바꾸는 스위치만 조정하는 방식으로 하면 코드가 깔끔해짐!
  let [tab, setTab] = useState(0);

  

  useEffect(()=>{
    
    let 꺼낸거 = localStorage.getItem('watched') 
    꺼낸거 = JSON.parse(꺼낸거) || []
    꺼낸거.push(찾은상품.id)
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  },[])
  // let watchedBox = localStorage.setItem('watched', JSON.stringify( [] ))
  //   localStorage.setItem('watched', JSON.stringify(찾은상품))
  //   let 꺼낸거 = localStorage.getItem('watched')
  //   꺼낸거 = JSON.parse(꺼낸거)
  //   watchedBox.push(꺼낸거)
  //   localStorage.setItem('watched', JSON.stringify(꺼낸거))






    
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
   <button className="btn btn-danger" onClick={()=>{
       dispatch(addItem( {id : 찾은상품.id, name : 찾은상품.title, count : 입력값} )) 
   }}>주문하기</button><br></br><br></br>   
      
    </div>
  </div>

  

  <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link"  href="#" onClick={()=>{setTab(0)}}>버튼1</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#" onClick={()=>{setTab(1)}}>버튼2</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#" onClick={()=>{setTab(2)}}>버튼3</a>
  </li>
  </ul>

  {
    <Tab tab={tab}/>
  }
  

   
</div> 
  )
}


function Tab(props){

    return (
      <div className={`tab ${props.tab === 0 ? 'start' : 'end'}`}>
        {[<div>1번 정보</div>,<div>2번 정보</div>,<div>3번 정보</div>][props.tab]}
      </div>
    )
}



function Warn(props){
  return(
    <div className='alert alert-warning'>
      숫자만 입력 가능합니다.
    </div>
  )
}


 


export default Detail;
