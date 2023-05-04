import styles from './BottomPage.module.css';
import scansImage2 from '../../images/Scans 2.png';
import cortexImage from '../../images/Cerebral Cortex.png';
// import { useNavigate } from 'react-router-dom';

function BottomPageSecond() {
    // const navigate = useNavigate()

    return (
        <div className={styles['Bottom-Page-Second']}>
            <div className={styles['Bottom-Page-Upper']}>
                <div className={styles['Bottom-Page-Upper-Left']}>
                    <p className={styles['Sub-Top-Title']}>Cognitive Fitness Level</p>
                    <p className={styles['Bottom-Page-Upper-Title']}>Understand yourself & others</p>
                    <p className={styles['Sub-Title']}>In our free assessment you’ll learn what really drives, inspires, worries different personality types, helping you build more meaning ful relationships</p>
                    <p className={styles['Explore-Link']}>EXPLORE COGNITIVE FITNESS</p>
                </div>
                <img className={styles['Scans-Image-Two']} src={scansImage2} alt="Scans"></img>
            </div>
            <div className={styles['Bottom-Page-Lower']}>
                <div className={styles['Lower-Lower']}>
                    <div className={styles['Lower-Left']}>
                        <img className={styles['Lower-Left-Cortex']} src={cortexImage}></img><p className={styles['Lower-Left-Cortex-Name']}>CORTEX</p><p class={styles['Lower-Left-Copyrights']}>Copyright © Event-u All rights reserved</p>
                    </div>
                    <div className={styles['Lower-Right']}>
                        <p className={styles['Option']}>Features</p>
                        <p className={styles['Option']}>Features</p>
                        <p className={styles['Option']}>Features</p>
                        <p className={styles['Option']}>Features</p>
                        <button className={styles['Comezar']}>Comenzar</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default BottomPageSecond;