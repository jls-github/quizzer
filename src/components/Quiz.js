import React, {Component} from 'react';
import Question from './Question'

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questions: [{
                text: "Is this a React App?",
                id: 1,
                answered: false,
                answers: [{
                    text: "Yes",
                    correct: true,
                    id: 1,
                    chosen: false
                },{
                    text: "No",
                    correct: false,
                    id: 2,
                    chosen: false
                }]
            },{
                text: "What language does React use?",
                id: 2,
                answered: false,
                answers: [{
                    text: "Javascript",
                    correct: true,
                    id: 3,
                    chosen: false
                },{
                    text: "COBOL",
                    correct: false,
                    id: 4,
                    chosen: false
                }]
            },{
                text: "Should I keep sensetive information in state?",
                id: 3,
                answered: false,
                answers: [{
                    text: "Yes",
                    correct: false,
                    id: 5,
                    chosen: false
                },{
                    text: "No",
                    correct: true,
                    id: 6,
                    chosen: false
                }]
            },{
                text: "Do people who use React get mad cash?",
                id: 4,
                answered: false,
                answers: [{
                    text: "Yes",
                    correct: true,
                    id: 7,
                    chosen: false
                },{
                    text: "No",
                    correct: false,
                    id: 8,
                    chosen: false
                }]
            },{
                text: "What do I use to pass down information in React?",
                id: 5,
                answered: false,
                answers: [{
                    text: "State",
                    correct: false,
                    id: 9,
                    chosen: false
                },{
                    text: "Props",
                    correct: true,
                    id: 10,
                    chosen: false
                }]
            }]
        }
    }

    correctQuestions = () => {
        let correct = 0
        this.state.questions.forEach(question => {
            return question.answers.forEach(answer => {
                if (answer.chosen === true && answer.correct === true) {
                    correct++
                }
            })
        })
        return correct
    }

    populateQuestions = () => {
        return this.state.questions.map(currentQuestion => {
            return <div><Question key={currentQuestion.id} question={currentQuestion} selectAnswer={this.selectAnswer} /><br /></div>
        })
    }

    selectAnswer = (id) => {
        this.setState(prevState => {
            let newState = prevState
            for (let i = 0; i < newState.questions.length; i++) {
                if (newState.questions[i].answered == false){
                    for (let j = 0; j < newState.questions[i].answers.length; j++) {
                        if (newState.questions[i].answers[j].id == id) {
                            newState.questions[i].answers[j].chosen = true
                            newState.questions[i].answered = true
                            console.log(newState.questions[i])
                        } 
                    }   
                }
            }
            return newState
        })
    }

    render() {
        return(
            <div>
                {this.populateQuestions()}
                <h3>Correct: {this.correctQuestions()}/{this.state.questions.length}</h3>
            </div>
        )
    }
}

export default Quiz