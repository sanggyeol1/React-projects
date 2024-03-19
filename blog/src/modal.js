import React from "react";

function Modal(props){
 
    return(
      <div className='modal'>
        <h3>{ props.글제목[props.title] }</h3>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    )
  

    
}

export default Modal;