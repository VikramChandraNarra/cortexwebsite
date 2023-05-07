import { useState } from 'react';
import styles from './EmailPopUp.module.css';

function EmailPopUp(props) {
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');

    function handleCheckboxChange(event) {
        setIsChecked(event.target.checked);
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    const handleSubmit = () => {
        props.submitData(email, isChecked);
    };
    return (
        <div className={styles["Email-Pop-Up"]}>
            <div className={styles["Main-Content"]}>
                <div className={styles["Title-Div"]}>
                    <p>One more thing...</p>
                </div>
                <p className={styles['Sub-Title']}> Before we move on to your profile, would you like an e-mail copy of your results?</p>
                <div className={styles["Input-Div"]}>
                    <div className={styles["icon-wrapper"]}>
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className={styles["input-wrapper"]}>
                        <input className={styles["Email-Input"]} placeholder='your@email.com' onChange={handleEmailChange}></input>
                    </div>
                </div>
                <p className={styles["Email-Reason"]}>We'll save your results so you can easily access them again.</p>
                <div className={styles["Check-Box-Div"]}>
                    <input className={styles["Check-Box"]}
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        value={email}
                    /><p className={styles["Check-Box-Desc"]}>Send me Virtuoso tips and research insights</p>
                </div>
                <button onClick={handleSubmit} className={styles["Button"]}>Send Results</button>
            </div>
        </div >
    );
}

export default EmailPopUp;