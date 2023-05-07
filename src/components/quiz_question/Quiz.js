import styles from './quiz.module.css'
import React from 'react'
import { Question } from './Question';

export const Quiz = () => {

    const questions = [
        "I utilize criticism for growth",
        "I do not become defensive when criticized.",
        "I can stay calm under pressure",
        "I handle set backs effectively",
        "I manage anxiety, stress, anger, and fear in pursuit of a goal",
        "I communicate my feelings to others",
        "I try to see things from another’s perspectives",
        "I recognize how my behaviour affects others",
        "I seek professional help when things become mentally challenging",
        "I can listen without jumping to judgement"
    ];

    const responses = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }

    const answerHandler = (identifier, index) => {
        if (index === -1) {
            responses[identifier] = 0;
            console.log(responses, responses[identifier], identifier, index);
        }
        else {
            responses[identifier] = index;
            console.log(responses, responses[identifier], identifier, index);
        }
    }

    const answerArray = []
    questions.map((question) => answerArray.push(-1))

    return (
        <div className={styles['container']}>
            {questions.map((question, index) => <Question responseHandler={answerHandler} answerArray={answerArray} identifier={index} key={index} prompt={question} />)}
        </div>

    )
}
