import React, { Component } from 'react'
import BoxClass from './component/BoxClass'

export default class AppClass extends Component {
    //컴포넌트를 생성하자마자 실행되는 함수
    //이걸로 state생성
    constructor(props) {
        super(props)
        this.state = {
            counter2: 0,
            value:0,
        }
        console.log("constructor")
    }
    //set함수
    increase = () => {
        this.setState({
            counter2: this.state.counter2 + 1,
            value: this.state.value + 1,
        })
        console.log("increase function", this.state)
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentDidUpdate(){
        console.log("compoentDidUpdate")
    }

    
    //함수에 this주의
    render() {
        console.log("render")
        return (
            
            <div>
                <div>state : {this.state.counter2}</div>
                <button onClick={() => { this.increase() }}>클릭!</button>
                {
                    this.state.counter2 < 3 && <BoxClass num={this.state.value}/>
                }
                
            </div>
        )
    }
}
