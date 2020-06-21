import React, { Component } from 'react'
import scoreStyle from './Score.module.css'

class Score extends Component {
    render() {
        return (
            <div className = {scoreStyle.board}>
                <h2>Score: <br /> {this.props.score}</h2>
            </div>
        )
    }
}

export default Score
