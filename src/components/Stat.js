import { useState, useEffect } from 'react';
import styles from './Stat.module.css';

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 4);
}

function Stat(props) {
    const [currentValue, setCurrentValue] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const incrementValue = (targetValue, duration) => {
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const easedProgress = easeOutCubic(progress);
                const value = targetValue * easedProgress;

                setCurrentValue(value);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setCurrentValue(targetValue);
                }
            };

            requestAnimationFrame(animate);
        };

        incrementValue(props.data[0], 1800); // Adjust duration (1000ms) to your preference
    }, [props.data[0]]);

    const displayValue = (() => {
        if (props.data[1] === "M+" || props.data[1] === "K+") {
            return Math.round(currentValue);
        }
        if (props.index === 2) {
            return currentValue.toFixed(1);
        }
        return currentValue.toFixed(1);
    })();

    return (
        <div className={`${styles['Stat']} ${mounted ? styles['Animate'] : ''}`}>
            <div className={styles['Stat-Upper']}>
                <div className={styles['Stat-Number']}>{displayValue}</div> <p>{props.data[1]}</p>
            </div>
            <div className={styles['Stat-Lower']}>{props.data[2]}</div>
        </div>
    );
}

export default Stat;
