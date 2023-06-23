import { useState } from 'react';
import './App.css';
// eslint-disable 이건 warning 끄기

{/* <button onClick={()=>{
        let copy = [...글제목]
        글제목변경(copy.sort())
      }}>가나다순 정렬</button>

      <button onClick={()=>{
        let copy = [...글제목]; //기존 state와 신규 state가 같다면 에너지 절약하느라 굳이 안바꿈, 화살표까지 바꾸는 카피본 생성 
        copy[0] = '여자 코트 추천'
        글제목변경(copy);
        }}>글수정</button> */}

        {/* </Modal>처럼 바로 닫아도 댐 */}
        // 의미없는 div는 <></>


function App() {

  let [글제목, 글제목변경] = useState(['남녀 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false)
  let [title, setTitle] = useState(0)
  let [입력값, 입력값변경] = useState('')
  //  state변경 시 html도 재 랜더링 됨
  //자주 변경될것같은 글제목같은건 State로 빼놓아서 저장하기
  return (
    <div className="App"> 
      <div className='black-nav'>
        <h4>ReactBlog</h4> 
      </div>

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(true); setTitle(i)}}>{ 글제목[i] }
              
              <span onClick={(e)=>{ 
                e.stopPropagation();
                let copy = [...따봉]
                copy[i] = copy[i]+1
                따봉변경(copy)
                }}>👍</span>{ 따봉[i] }</h4>
              <p>2월 17일 발행</p>
              <button onClick={(e)=>{
                let copy = [...글제목]
                copy.splice(i,1);
                글제목변경(copy);
              }}>글 삭제</button>
            </div>
          )
        })
      }

    <input onChange={(e)=>{
      입력값 = e.target.value;
    }}></input>
    <button onClick={()=>{
      let copy = [...글제목]
      copy.unshift(입력값)
      글제목변경(copy)

      let copy2 = [...따봉]
      copy2.unshift(0)
      따봉변경(copy2)
    }}>글 작성</button>
      
    {
      modal == true ? <Modal color={'skyblue'} 글제목={글제목} title={title}/> : null
    }
    
    
    </div>
    
  );
}
//props로  부모 컴포넌트에서 자식 컴포넌트로 state전달 가능
//1. 자식컴포넌트에서 작명, state이름 채우기
//2. props 파라미터 작성 후 props.작명 사용
function Modal(props){
  return(
      <div className="modal" style={{background : props.color}}>
        <h4>{props.글제목[props.title]}</h4>

        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
  )
}


// class Modal2 extends React.Component{
//   constructor(){
//     super()
//   }
//   render(){
//     return(
//       <div>안녕</div>
//     )
//   }
// }

export default App;