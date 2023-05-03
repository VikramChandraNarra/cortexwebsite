import styles from './App.module.css';
import scansImage from './images/Scans 1.png';
import NavBar from './components/NavBar';
import MainPageStats from './components/Main-Page-Stats';

function App() {
  return (
    <div className={styles['App']}>
      <NavBar></NavBar>
      <img className={styles['Scans-Image-1']} src={scansImage} alt='Scans'></img>
      <div className={styles['Headings']}>
        <p className={styles['Main-Heading']}>"Absolutely remarkable to have a true grasp on my cognitive fitness and feel truly understood"</p>
        <p className={styles['Sub-Heading']}>Only 2 minutes to get a "freakishly accurate" description of your current of your current cognitive fitness level.</p>
      </div>
      <MainPageStats></MainPageStats>
    </div>
  );
}

export default App;
