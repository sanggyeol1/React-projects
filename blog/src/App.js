import './App.css';
import { useState } from 'react';
import Modal from './modal';

function App() {

  let [글제목, 글제목변경] = useState(['여자코트추천','강남우동맛집', '파이썬독학'])
  let [따봉, 따봉변경] = useState([0,0,0])
  let [modal, setModal] = useState(false)
  let [title, setTitle] = useState(0)
  let [newTitle, setNewTitle] = useState('')
  let now = new Date()
  let [date, setDate] = useState(['1월 27일', '2월 28일', '3월 2일'])



  return (
    <div className='App'>
      <div class="black-nav">
        <h4>블로그임</h4>    
      </div>
      
      {
        글제목.map((a, i)=>{
          return(
            <div className='list' key={i}>
              <h4 onClick={()=>{ 
                if(modal == true){ setModal(false) }
                else{ setModal(true) } setTitle(i) }}>{글제목[i]} 

              <span onClick={(e)=>{
                e.stopPropagation();
                let copy = [...따봉]
                copy[i] = copy[i]+1
                따봉변경(copy)
              }}>👍</span> {따봉[i]}  
              <button onClick={(e)=>{
                e.stopPropagation();
                let copy = [...글제목]
                copy.splice(i,1)
                글제목변경(copy)

                let copy2 = [...따봉];
                copy2.splice(i, 1); // 글이 삭제될 때 따봉 배열에서도 해당 항목을 삭제합니다.
                따봉변경(copy2);

                let copy3 = [...date];
                copy3.splice(i, 1); // 글이 삭제될 때 날짜 배열에서도 해당 항목을 삭제합니다.
                setDate(copy3);
              }}>삭제</button></h4>

              <p>{date[i]}</p>
            </div>
          )
          
        })
      }
      <input onChange={(e)=>{
        setNewTitle(e.target.value)
      }}/><button onClick={()=>{

        if(newTitle!=''){
          let copy = [...글제목]
          copy.unshift(newTitle)
          글제목변경(copy)
  
          let copy2 = [...따봉]
          copy2.unshift(0)
          따봉변경(copy2)
        
          let copy3 = [...date]
          copy3.unshift(now.getMonth()+1+'월 '+ now.getDate()+'일')
          setDate(copy3)
        
        }
      }}>작성</button>


      {
        modal == true ? <Modal 글제목={글제목} title={title}/> : null 
      }
    </div>
  );
}





export default App;

















