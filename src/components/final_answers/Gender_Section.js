import { useState } from 'react';
import styles from './GenderSection.module.css';

function Gender_Section(prop) {
    const [selectedGender, setSelectedGender] = useState('Select your gender');

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };
    const dataChecker = () => {
        if (selectedGender !== "Select your gender") {
            prop.data(selectedGender);
        }
        else {
            alert("Please Select Your Gender.");
        }
    }
    return (
        <div className={styles["Gender-Section"]} >
            <div className={styles["Title-Div"]}>
                <p className={styles["Title"]}>Your gender <span className={styles["Title-Optional"]}>(optional)</span></p>
            </div>
            <div className={styles["Sub-Title"]}>This will determine your avatar in the results screen.</div>
            <select
                className={styles['Gender-Dropdown']}
                value={selectedGender}
                onChange={handleGenderChange}
            >
                <option disabled>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <button className={styles["Button"]} onClick={dataChecker}>See results <i className="fa-solid fa-arrow-right fa-sm"></i></button>
        </div>
    );
};


export default Gender_Section;