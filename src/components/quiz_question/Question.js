import React, { useState } from 'react'
import styles from './quiz.module.css'

export const Question = (prop) => {
  const [clicked, isClicked] = useState(-1)
  const onClickHandler = (index) => {
    if (clicked === index) {
      isClicked(-1);
    }
    else {
      prop.responseHandler(prop.identifier, index);
      isClicked(index);
    }
  };


  return (
    <div className={styles['question']}>
      <h1 className={styles['heading_question']}>{prop.prompt}</h1>
      <div className={styles['poll']}>
        <p className={styles['agree_text']}>Agree</p>
        <button
          onClick={() => onClickHandler(0)}
          className={`${styles['green1']} ${clicked === 0 ? `${styles['class0']}` : ''}`}
        ></button>
        <button
          onClick={() => onClickHandler(1)}
          className={`${styles['green2']} ${clicked === 1 ? `${styles['class1']}` : ''}`}
        ></button>
        <button
          onClick={() => onClickHandler(2)}
          className={`${styles['green3']} ${clicked === 2 ? `${styles['class2']}` : ''}`}
        ></button>
        <button
          onClick={() => onClickHandler(3)}
          className={`${styles['gray']} ${clicked === 3 ? `${styles['class3']}` : ''}`}
        ></button>
        <button
          onClick={() => onClickHandler(4)}
          className={`${styles['purple3']} ${clicked === 4 ? `${styles['class4']}` : ''}`}
        ></button>
        <button
          onClick={() => onClickHandler(5)}
          className={`${styles['purple2']} ${clicked === 5 ? `${styles['class5']}` : ''}`}
        ></button>
        <button
          onClick={() => onClickHandler(6)}
          className={`${styles['purple1']} ${clicked === 6 ? `${styles['class6']}` : ''}`}
        ></button>

        <p className={styles['disagree_text']}>Disagree</p>
      </div>
    </div>
  )
}
