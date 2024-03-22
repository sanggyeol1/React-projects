import { useEffect, useState } from 'react';
import './App.css';




function App() {
  let counter = 0;//state가 바뀔 때마다 초기화, 그래서 console창에 count는 계속 1로 남아있다
  let [counter2, setCounter2] = useState(0)
  const [value, setValue] = useState(0)

  const increase = () => {
    counter = counter + 1 //동기적으로 작동
    setCounter2(counter2 + 1); // 비동기적으로 작동함(함수가 끝날때까지 기다렸다가)
    setValue(value+2)
    console.log("counter는",counter,"counter2는",counter2) // counter2는 증가하지 않은 상태에서 출력
  }

  //1. 유저가 버튼을 클릭한다.
  // 2. counter+1 해서 1이 됨
  // 3. setCounter 함수 호출
  // 4. console.log()실행
  // 5. 변수값은 1로 보이고 state값은 아직 변하지 않았기 때문에 0으로 보임
  // 6. 함수 끝
  // 7. app rerendering
  // 8. 변수 counter 다시 0으로 돌아감
  // 9. 비동기적으로 처리되는 setcounter2함수 실행 -> counter2가 1 증가.


  useEffect(()=>{
    console.log("useEffect1 firee")
  },[])

  useEffect(()=>{
    console.log("useEffect2 firee", counter2)
  },[counter2])

  useEffect(()=>{
    console.log("useEffect2 firee", value)
  },[value])

  return (
    <>
    {
      console.log("render")
    }
      <div>{counter}</div>
      <div>state : {counter2}</div>
      <button onClick={()=>{ increase() }}>클릭!</button>
      
    </>
  );
}

export default App;
