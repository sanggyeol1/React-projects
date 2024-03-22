import React, { Component } from 'react'


        
function getBorderColor(result) {
    if (result == 'Win') return 'green'
    else if (result == 'Lose') return 'red'
    else return 'black'
}

export default class BoxClass extends Component {
    render() {
        const borderColor = getBorderColor(this.props.result)
        const boxStyle = {
            border: '5px solid ' + borderColor
        }
        

        

        return (
            <div className='box' style={boxStyle}>
                <h1>{this.props.title}</h1>
                <img className='item-img' src={this.props.item && this.props.item.image} />
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}
