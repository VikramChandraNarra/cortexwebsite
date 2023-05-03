import styles from './App.module.css';
import scansImage from './images/Scans 1.png';
import NavBar from './components/NavBar';
import MainPageStats from './components/Main-Page-Stats';
import BottomPage from './components/bottom_page/BottomPage';
import React, { useEffect } from 'react';
import { db } from './authentication/Authentication';
import { doc, setDoc, updateDoc, increment } from "firebase/firestore";

function App() {
  useEffect(() => {
    const updateVisitorsCount = async () => {
      await updateDoc(doc(db, "visitors", "visitors"), {
        count: increment(1)
      });
      setVisitorsDocument();
    };
    const setVisitorsDocument = async () => {

      let latitude = '';
      let longitude = '';

      if ("permissions" in navigator && "geolocation" in navigator) {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.permissions.query({ name: "geolocation" }).then(permissionStatus => {
              if (permissionStatus.state === "granted") {
                navigator.geolocation.getCurrentPosition(resolve, reject);
              } else {
                reject(new Error('Geolocation permission not granted'));
              }
            });
          });

          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
        } catch (error) {
        }
      }

      const currentDate = formatDate(new Date());

      const documentData = {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      };

      if (latitude !== '' && longitude !== '') {
        documentData.latitude = latitude;
        documentData.longitude = longitude;
      }

      try {
        await setDoc(doc(db, "visitors_details", currentDate), documentData);
      } catch (error) {
        console.error("Error setting document:", error);
      }
    };
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      return `${year}${month}${day}-${hours}:${minutes}:${seconds}`;
    };
    updateVisitorsCount();
  }, []);




  return (
    <div className={styles['App']}>
      <NavBar></NavBar>
      <img className={styles['Scans-Image-1']} src={scansImage} alt='Scans'></img>
      <div className={styles['Headings']}>
        <p className={styles['Main-Heading']}>"Absolutely remarkable to have a true grasp on my cognitive fitness and feel truly understood"</p>
        <p className={styles['Sub-Heading']}>Only 2 minutes to get a "freakishly accurate" description of your current of your current cognitive fitness level.</p>
      </div>
      <MainPageStats></MainPageStats>
      <BottomPage></BottomPage>
    </div>
  );
}

export default App;
