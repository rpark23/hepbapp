import React, { Component } from 'react'
import answerStyle from './Answer.module.css'

export class Answer extends Component {
    state = {
        answer: '',
        show: false
    }
    showAnswer = () => {
        this.setState({show: true});
    }
    handleChange = (event) => {
         this.setState({answer: event.target.value});
    }

    render() {
        const index = this.props.index
        const category = this.props.category
        const question = category.questions[index]
        const answer = category.answers[index]
        return ( 
            
            <div className = {answerStyle.card}>
                <h2 className = {answerStyle.question}>{question}</h2>
                
                {this.state.show ? 
                <div className = {answerStyle.answer}>
                    <h3>
                        Your Answer: {this.state.answer} <br /> <br />Correct Answer: {answer}
                    </h3> 
                    <button className = {answerStyle.correct} onClick = {() => this.props.toggle(category, index, true, true)}>Correct</button>
                    <button className = {answerStyle.wrong} onClick = {() => this.props.toggle(category, index, true, false)}>Incorrect</button>
                </div>: 
                <div className = {answerStyle.form}>
                    <textarea className = {answerStyle.input} value = {this.state.answer} placeholder = 'Your Answer' onChange = {this.handleChange} />
                    <button className = {answerStyle.submit} onClick = {this.showAnswer}>Enter</button>
                </div>}
                
                <button className = {answerStyle.button} onClick = {() => this.props.toggle(category, index, false, false)}>x</button>
            </div>
        )
    }
}

export default Answer
