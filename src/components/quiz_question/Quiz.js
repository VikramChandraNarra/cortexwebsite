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

    const answerArray = []
    questions.map((question) => answerArray.push(-1))

    return (
        <div className={styles['container']}>
            {questions.map((question, index) => <Question answerArray={answerArray} key={index} prompt={question} />)}
        </div>

    )
}
