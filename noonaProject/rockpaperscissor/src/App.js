import { useState } from 'react';
import './App.css';
import Box from './conponent/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, faHandScissors, faHandBackFist } from '@fortawesome/free-solid-svg-icons';



//1. 박스 2개(타이틀, 사진, 결과값)
//2. 가위 바위 보 버튼
//3. 버튼을 클릭하면 클릭한 값이 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3, 4 의 결과를 가지고 승패를 따진다.
//6. 승패 결과에 따라 테두리 색이 바뀐다.

const choice = {
  rock: {
    name: "Rock",
    image: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi1.sndcdn.com%2Fartworks-Zx3I74NthX78Nk2t-UAG4bw-t500x500.jpg&type=a340'
  },
  scissors: {
    name: "Scissors",
    image: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fsitem.ssgcdn.com%2F10%2F67%2F84%2Fitem%2F1000548846710_i4_500.jpg&type=a340"
  },
  paper: {
    name: "Paper",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjRfODMg%2FMDAxNzA2MDc5MjE2NDYw.HXKOeo_7Fu0N93EA7zL3OFFi5ciRI6L1-itnpu6ciAQg.y1gSCUmRZOekdtl_AJQ4Qq0hyGA-KX3gE_WpBelvcQkg.JPEG.gopaper_online%2F%25B9%25AB%25B4%25CC%25C6%25DE%25C1%25F6_%25BD%25E6%25B3%25D7%25C0%25CF.jpg&type=sc960_832"
  }
}



function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  const [computerResult, setComputerResult] = useState("")

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChioce()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice))
    setComputerResult(judgement(computerChoice, choice[userChoice]))
  }

  const judgement = (user, computer) => {

    console.log(user, computer)
    if (user.name == computer.name) {
      return "Tie"
    } else if ((user.name == "Rock" && computer.name == "Scissors") ||
      (user.name == "Scissors" && computer.name == "Paper") ||
      (user.name == "Paper" && computer.name == "Rock")) {
      return "Win"
    }
    else {
      return "Lose"
    }
  }

  const randomChioce = () => {
    let itemArray = Object.keys(choice)//객체의 키값만 뽑아서 array로 변환
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem]
    return choice[final]
  }

  return (
    <>
      <div className='main'>
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={computerResult} />
      </div>
      <div className='main'>
        <FontAwesomeIcon className='icon' icon={faHandScissors} onClick={() => { play("scissors") }} />
        <FontAwesomeIcon className='icon' icon={faHandBackFist} onClick={() => { play("rock") }} />
        <FontAwesomeIcon className='icon' icon={faHand} onClick={() => { play("paper") }} />
      </div>
    </>
  );
}

export default App;
