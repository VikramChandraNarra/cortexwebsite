import styles from './Main_Page_Stats.module.css'
import Stat from './Stat';

function MainPageStats() {
    const statData = { 0: [50, "K+", "Tests taken today"], 1: [1, "M+", "Tests taken in USA"], 2: [10, "M+", "Total tests taken"], 3: [94.1, "%", "Results rates as accurate or very accurate"] }
    return (
        <div className={styles['Stats-Div']}>
            <Stat data={statData[0]} index={0}></Stat>
            <Stat data={statData[1]} index={1}></Stat>
            <Stat data={statData[2]} index={2}></Stat>
            <Stat data={statData[3]} index={3}></Stat>
        </div >
    );
}


export default MainPageStats;