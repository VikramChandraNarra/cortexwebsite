import styles from './BottomPage.module.css';
import scansImage2 from '../../images/Scans 2.png';
import Footer from './Footer';
// import { useNavigate } from 'react-router-dom';

function BottomPage() {
    // const navigate = useNavigate()

    return (
        <div className={styles['Bottom-Page']}>
            <div className={styles['Bottom-Page-Upper']}>
                <div className={styles['Bottom-Page-Upper-Left']}>
                    <p className={styles['Sub-Top-Title']}>Cognitive Fitness Level</p>
                    <p className={styles['Bottom-Page-Upper-Title']}>Understand yourself & others</p>
                    <p className={styles['Sub-Title']}>In our free assessment you’ll learn what really drives, inspires, worries different personality types, helping you build more meaning ful relationships</p>
                    <p className={styles['Explore-Link']}>EXPLORE COGNITIVE FITNESS</p>
                </div>
                <img className={styles['Scans-Image-Two']} src={scansImage2} alt="Scans"></img>
            </div>
            <Footer show={true}></Footer>
        </div >
    );
}

export default BottomPage;
