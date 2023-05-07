import styles from './Footer.module.css';
import cortexImage from '../../images/Cerebral Cortex.png';

function Footer(props) {
    return (
        <div className={styles['Bottom-Page-Lower']}>
            {
                props.show ? (<div className={styles["Show-Div"]}><p className={styles['Bottom-Page-Lower-Title']}>Curious how accurate we are about you?</p>
                    <button className={styles['Bottom-Page-Button']}>Take the Test</button></div>) : ''
            }
            <div className={styles['Lower-Lower']}>
                <div className={styles['Lower-Left']}>
                    <img className={styles['Lower-Left-Cortex']} src={cortexImage} alt="Cortex"></img><p className={styles['Lower-Left-Cortex-Name']}>CORTEX</p><p className={styles['Lower-Left-Copyrights']}>Copyright © Event-u All rights reserved</p>
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
    );
}

export default Footer;
