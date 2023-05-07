import styles from './quiz.module.css'
import React, { useState } from 'react'
import { Question } from './Question';
import BottomPageSecond from '../bottom_page/BottomPageSecond';
import { db } from '../.././authentication/Authentication';
import { doc, setDoc, updateDoc, increment } from "firebase/firestore";
import EmailPopUp from './EmailPopUp';


export const Quiz = () => {
    const [gender, setGender] = useState("NA");

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
    const [popUp, showPopUp] = useState(false);
    const [responses, setResponses] = useState({ 0: -1, 1: -1, 2: -1, 3: -1, 4: -1, 5: -1, 6: -1 });
    const answerHandler = (identifier, index) => {
        setResponses(prevResponses => {
            if (prevResponses[identifier] === index) {
                console.log(index, prevResponses[index], prevResponses);
                return { ...prevResponses, [identifier]: -1 };
            } else {
                return { ...prevResponses, [identifier]: index };
            }
        });
    };
    const dataHandler = async (selectedGender) => {
        let checker = true;
        for (let key in responses) {
            if (responses[key] === -1) {
                alert(`Value at key ${key} is 0`);
                checker = false;
                break;
            }
        }
        if (checker) {
            setGender(selectedGender);
            showPopUp(true);
        }
    };
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}${month}${day}-${hours}:${minutes}:${seconds}`;
    };
    const submit = async (email, isChecked) => {

        const currentTime = formatDate(new Date());

        await setDoc(doc(db, "submissions", email), {
            gender: gender,
            email: email,
            sendTips: isChecked,
            responses: responses,
            time: currentTime,
        });
        await updateDoc(doc(db, "submissions_count", "submissions_count"), {
            count: increment(1)
        });
    };

    const answerArray = []
    questions.map((question) => answerArray.push(-1));

    return (
        <div className={styles['container']}>
            {questions.map((question, index) => <Question responseHandler={answerHandler} answerArray={answerArray} identifier={index} key={index} prompt={question} />)}
            <BottomPageSecond collector={dataHandler}></BottomPageSecond>
            {
                popUp ? (
                    <EmailPopUp submitData={submit}></EmailPopUp>
                ) : ''
            }
        </div>
    )
}
