import React, { Component } from 'react'
import './App.css';
import BoxClass from './conponent/BoxClass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, faHandScissors, faHandBackFist } from '@fortawesome/free-solid-svg-icons';


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


export default class AppClass extends Component {

    //이걸로 state생성
    constructor(props) {
        super(props)
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: "",
            computerResult: "",
        }
    }
    //set함수
    setUserSelect = (x) => {
        this.setState({
            userSelect: x
        })
    }
    setComputerSelect = (x) => {
        this.setState({
            computerSelect: x
        })
    }
    setResult = (x) => {
        this.setState({
            result: x
        })
    }
    setComputerResult = (x) => {
        this.setState({
            computerResult: x
        })
    }

    render() {

        const play = (userChoice) => {
            this.setUserSelect(choice[userChoice])
            let computerChoice = randomChioce()
            this.setComputerSelect(computerChoice)
            this.setResult(judgement(choice[userChoice], computerChoice))
            this.setComputerResult(judgement(computerChoice, choice[userChoice]))
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
                    <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
                    <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.computerResult} />
                </div>
                <div className='main'>
                    <FontAwesomeIcon className='icon' icon={faHandScissors} onClick={() => { play("scissors") }} />
                    <FontAwesomeIcon className='icon' icon={faHandBackFist} onClick={() => { play("rock") }} />
                    <FontAwesomeIcon className='icon' icon={faHand} onClick={() => { play("paper") }} />
                </div>
            </>
        );
    }
}
