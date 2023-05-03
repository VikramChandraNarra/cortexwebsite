import styles from './NavBar.module.css'
import CerebralCortexImage from '../images/Cerebral Cortex.png'

function NavBar() {
    return (
        <div className={styles['NavBar']}>
            <div className={styles['Left-NavBar-Div']}>
                <a href=""><div className={styles['Cortex-Logo-Name']}>
                    <img className={styles['Cerebral-Cortex']} src={CerebralCortexImage} alt="Cerebral Cortex"></img>
                    CORTEX
                </div>
                </a>
                <p>Cognitive Fitness Test</p>
            </div>
            <button className={styles['NavBar-Test-Button']}>Take the Test</button>
        </div>
    );
}

export default NavBar;