import styles from './quiz.module.css'
import React, {useEffect, useState} from 'react'
import { Question } from './Question';

function Quiz() {

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


    const [responses, setResponses] = useState({ 0: -1, 1: -1, 2: -1, 3: -1, 4: -1, 5: -1, 6: -1 , 7:-1, 8:-1, 9:-1})

    const [highlightedIndex, setHighlightedIndex] = useState(0)



    useEffect(() => {
        // console.log(responses, highlightedIndex)
    }, [responses, highlightedIndex])

    console.log("rendering....")

    const answerHandler = (identifier, index) => {
        
        if (index === -1) {
            
            const newResponse = responses
            newResponse[identifier] =  0;
            setResponses(newResponse)
            setHighlightedIndex(Object.keys(responses).find(key => responses[key] === -1))
            // console.log(responses)
        }
        else {
            const newResponse = responses
            newResponse[identifier] =  index;
            setResponses(newResponse)
            setHighlightedIndex(Object.keys(responses).find(key => responses[key] === -1))
            // console.log(responses)
        }
        // console.log(responses)
    }
    
    // const highlighted = () => {

    // }
    const answerArray = []
    questions.map((question) => answerArray.push(-1))

    return (
        <div className={styles['container']}>
            {questions.map((question) => <Question responseHandler={answerHandler} answerArray={answerArray} identifier={questions.indexOf(question)} key={questions.indexOf(question)} prompt={question} isHighlighted={highlightedIndex == questions.indexOf(question)}/>)}
        </div>

    )
}

export default Quiz;
