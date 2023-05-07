import styles from './BottomPageSecond.module.css';
import Gender_Section from '../final_answers/Gender_Section';
import Footer from './Footer';

function BottomPageSecond(prop) {
    const dataHandler = (gender) => {
        prop.collector(gender);
        console.log("Pressed", gender);
    };

    return (
        <div className={styles["Bottom-Page"]}>
            <Gender_Section data={dataHandler}></Gender_Section>
            <Footer show={false}></Footer>
        </div>
    );
}

export default BottomPageSecond;