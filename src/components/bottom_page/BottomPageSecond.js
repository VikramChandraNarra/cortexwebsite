import styles from './BottomPageSecond.module.css';
import GenderSection from '../final_answers/Gender_Section';
import Footer from './Footer';

function BottomPageSecond(prop) {
    const dataHandler = (gender) => {
        prop.collector(gender);
        console.log("Pressed", gender);
    };

    return (
        <div className={styles["Bottom-Page"]}>
            <GenderSection data={dataHandler}></GenderSection>
            <Footer show={false}></Footer>
        </div>
    );
}

export default BottomPageSecond;
