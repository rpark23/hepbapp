import React, { Component } from 'react';
import questionsStyle from './Question.module.css'
import Proptypes from 'prop-types'
import Answer from "./Answer.js"

class Question extends Component {
    getColor = () => {
        if (this.props.category.answered[this.props.index]) {
            return {
                backgroundColor: this.props.category.correct[this.props.index] ? "#3ac29d" : "red"
            }
        }
    }

    render() {
        const index = this.props.index
        const category = this.props.category
        const {on} = category
        return (
            <div className = {questionsStyle.question} >
                {on[index] ? <Answer category = {this.props.category} index = {index} toggle = {this.props.toggle}/>: ''}
                <button className = {questionsStyle.button} style = {this.getColor()}  onClick = {() => this.props.toggle(category, index, false, false)}>
                    {100 * (index + 1)}
                </button>
            </div>
            
        );
    }
}

Question.propTypes = {
    category: Proptypes.object.isRequired,
    index: Proptypes.number.isRequired,
}

export default Question;
