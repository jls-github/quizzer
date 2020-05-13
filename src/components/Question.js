import React, {Component} from 'react';

class Question extends Component {

    selectAnswerHandler = (event) => {
        let id = event.target.id
        this.props.selectAnswer(id)
    }

    displayQuestions = () => {
        if (this.props.question.answered === false){
            return this.props.question.answers.map(answer => {
                return <div><button id={answer.id} onClick={this.selectAnswerHandler}>{answer.text}</button></div>})
        } else {
            let answerCorrect = this.props.question.answers.filter(answer => {
                return answer.chosen === true
            })[0].correct

            if (answerCorrect == true) {
                return <div>Correct!</div>
            } else {
                return <div>Incorrect</div>
            }
        }
    }

    render() {
        return (
            <div>
                {this.props.question.text}
                {this.displayQuestions()}
            </div>
        )
    }
}

export default Question