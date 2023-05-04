import React, { useState } from 'react'
import styles from './quiz.module.css'

export const Question = (prop) => {
    const [clicked, isClicked] = useState(-1) //Means nothing has been clicked yet

    
  return (
    <div className={styles['question']}>
        <h1 className={styles['heading_question']}>{prop.prompt}</h1>
        <div className={styles['poll']}>
            <p className={styles['agree_text']}>Agree</p>
            <button onClick={() => isClicked(0)} className={styles['green1']}></button>
            <button onClick={() => isClicked(1)} className={styles['green2']}></button>
            <button onClick={() => isClicked(2)} className={styles['green3']}></button>
            <button onClick={() => isClicked(3)} className={styles['gray']}></button>
            <button onClick={() => isClicked(4)} className={styles['purple3']}></button>
            <button onClick={() => isClicked(5)} className={styles['purple2']}></button>
            <button onClick={() => isClicked(6)} className={styles['purple1']}></button>
            <p className={styles['disagree_text']}>Disagree</p>
        </div>
    </div>
  )
}
