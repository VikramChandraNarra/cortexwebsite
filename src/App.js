import styles from './App.module.css';
import scansImage from './images/Scans 1.png';
import NavBar from './components/NavBar';
import MainPageStats from './components/Main-Page-Stats';
import BottomPage from './components/bottom_page/BottomPage';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Quiz from './components/quiz_question/Quiz';
import BottomPageSecond from './components/bottom_page/BottomPageSecond';


function App() {
  const [testClicked, isTestClicked] = useState(0)


  const handleButtonClick = () => {
    console.log("regis")
    isTestClicked(1)
  };

  return (
    <div className={styles['App']}>
      <NavBar onClick={handleButtonClick}></NavBar>
      {/* <Routes>
        <Route path='/' element={<FirstScreen/>} />
        <Route path='/test' element={<SecondScreen/>} />
      </Routes> */}
      {testClicked == 0 && <FirstScreen/>}
      {testClicked == 1 && <SecondScreen2 />}
      {/* {testClicked && <SecondScreen />} */}

    </div>
  );
}


function FirstScreen() {
  return (
    <div>
      <img className={styles['Scans-Image-1']} src={scansImage} alt='Scans'></img>
      <div className={styles['Headings']}>
        <p className={styles['Main-Heading']}>"Absolutely remarkable to have a true grasp on my cognitive fitness and feel truly understood"</p>
        <p className={styles['Sub-Heading']}>Only 2 minutes to get a "freakishly accurate" description of your current of your current cognitive fitness level.</p>
      </div>
      <MainPageStats></MainPageStats>
      <BottomPage></BottomPage>
    </div>
  )
}

function SecondScreen() {
  return (
    <div className={styles['Second_Screen']}>
      {/* <div className={styles['highlight_box']}>
        <h1 className={styles['heading_banner_title']}>Cognitive Fitness Test</h1>
      </div> */}
      {/* <div className={styles['highlight_box2']}></div>
        <div className={styles['hover_box_wrapper']}>
          <div className={styles['hover_box']}>
            <h1 className={styles['hover_box_title']}>Complete the <br /> Test</h1>
            <p className={styles['hover_box_subheading']}>Be yourself and answer honestly to find your cognitive fitness level</p>
          </div>
          <div className={styles['hover_box']}>
            <h1 className={styles['hover_box_title']}>View Detailed Results</h1>
            <p className={styles['hover_box_subheading']}>Learn how your cognitive fitness level compares to your peers</p>
          </div>
          <div className={styles['hover_box']}>
            <h1 className={styles['hover_box_title']}>Unlock Your Potential</h1>
            <p className={styles['hover_box_subheading']}>Grow into the person you want to be with the Cortex App</p>
        </div>
      </div> */}
      {/* <Quiz /> */}
      <Dropdown />
      

    </div>
  )
}


function SecondScreen2() {
  const [gender, setGender] = useState()
  return (
    <>
    {/* <h1>Your Gender</h1> */}
    {/* <p>This will determine your avatar in the results screen.</p> */}
    <Dropdown setGender={setGender}/>
    {/* <button></button> */}
    </>
  )
}



function Dropdown( prop ) {
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("Select your gender")
  const options = ["Male", "Female", "Prefer not to say"];
  return (
    <div className={styles["dropdown"]}>
      <div className={styles["dropdown-btn"]} onClick={(e) =>
      setIsActive(!isActive)}>
        {title}
        <span className={styles["fas fa-caret-down"]}></span>
      </div>
      {isActive && (
        <div className={styles["dropdown-content"]}>
          {options.map((option) => (
            <div
              onClick={(e) => {
                // setSelected(option);
                prop.setGender(option)
                setIsActive(false);
                setTitle(option)
              }}
              className={styles["dropdown-item"]}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default App;