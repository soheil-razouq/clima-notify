import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Today from "./components/Today/Today";
import Tomorrow from "./components/Tomorrow/Tomorrow";
import News from "./components/News/News";

function App() {
  // consts
  const [dataByLocation, setDataByLocation] = useState();
  const DaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const [cityInput, setCityInput] = useState("");
  const [error, setError] = useState(null);

  const FullDateToday = new Date();
  const TodayName = DaysOfWeek[FullDateToday.getDay()];
  const dayOfMonth = FullDateToday.getDate();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  // get the latitude and longitude for curent device location
  // const getLocation = () => {
  //     if (navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(
  //             (position) => {
  //                 setLatitude(position.coords.latitude);
  //                 setLongitude(position.coords.longitude);
  //             },
  //             (error) => {
  //                 setError(error.message);
  //                 // setLoading(false);
  //             }
  //         );
  //     } else {
  //         setError('Geolocation is not supported by this browser.');
  //         // setLoading(false);
  //     }
  // };
  // fetch weather data using city name or coordinates
  useEffect(() => {
      const getWeatherDataByCurrentLocation = async (latitude, longitude) => {
          try {
              const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f2e41bbf55c69a846243962a4b951b76`);
              const data = await response.json();
              setDataByLocation(data);
          } catch (error) {
              setError("error here in fetch data")
              console.error('Error fetching initial weather data:', error);
          }
      }
      const getLocation = () => {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                  (position) => {
                      setLatitude(position.coords.latitude);
                      setLongitude(position.coords.longitude);
                      getWeatherDataByCurrentLocation(latitude, longitude);
                  },
                  (error) => {
                      setError(error.message);
                      // setLoading(false);
                  }
              );
          } else {
              setError('Geolocation is not supported by this browser.');
              // setLoading(false);
          }
      };
      getLocation();
  }, [])
  //get the day with suffix th,st,nd,rd
  const getDayWithSuffix = (day) => {
      if (day >= 11 && day <= 13) {
          return `${day}th`;
      }
      switch (day % 10) {
          case 1:
              return `${day}st`;
          case 2:
              return `${day}nd`;
          case 3:
              return `${day}rd`;
          default:
              return `${day}th`;
      }
  };
  const formattedDateString = `${monthNames[FullDateToday.getMonth()]} ${getDayWithSuffix(dayOfMonth)}`;
  //fetch data by a city input
  const getWeatherDataByLocation = async (e) => {
      try {
          e.preventDefault();
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=f2e41bbf55c69a846243962a4b951b76`);
          const data = await response.json();
          setDataByLocation(data);
      } catch (error) {
          setError("error here in fetch data")
          console.error('Error fetching initial weather data:', error);
      }
  };
  //show images by wather status
  const getWeatherImage = () => {
      const weatherStatus = dataByLocation.weather[0].main;
      const imageMap = {
          'Sun': './sunny.png',
          'Clear': './sunny.png',
          'Clouds': './cloudy.png',
          'Rain': './rainy.png',
          'Snow': './snowy.png',
          'Wind': './windy.png',
      };
      const imageSource = imageMap[weatherStatus];
      return imageSource;
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/tomorrow" element={<Tomorrow/>} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
