import styles from './quiz.module.css'
import React from 'react'
import { Question } from './Question';
import BottomPageSecond from '../bottom_page/BottomPageSecond';

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

    const responses = { 0: -1, 1: -1, 2: -1, 3: -1, 4: -1, 5: -1, 6: -1 }
    const answerHandler = (identifier, index) => {
        if (responses[identifier] === index) {
            console.log(index, responses[index], responses);
            responses[identifier] = -1;
        }
        else {
            responses[identifier] = index;
        }
    }
    const dataHandler = (gender) => {
        for (let key in responses) {
            if (responses[key] === -1) {
                alert(`Value at key ${key} is 0`);
                break;
            }
        }

    };

    const answerArray = []
    questions.map((question) => answerArray.push(-1))

    return (
        <div className={styles['container']}>
            {questions.map((question, index) => <Question responseHandler={answerHandler} answerArray={answerArray} identifier={index} key={index} prompt={question} />)}
            <BottomPageSecond collector={dataHandler}></BottomPageSecond>
        </div>
    )
}
