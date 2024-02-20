import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Today from "./components/Today/Today";
import Tomorrow from "./components/Tomorrow/Tomorrow";
import News from "./components/News/News";
import { useEffect, useState } from "react";

function App() {
  const [error, setError] = useState(null);
  const [dataByCurrentLocation, setDataByCurrentLocation] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  useEffect(() => {
    const getWeatherDataByCurrentLocation = async (latitude, longitude) => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f2e41bbf55c69a846243962a4b951b76`);
        const data = await response.json();
        setDataByCurrentLocation(data);
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



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Today data={dataByCurrentLocation}/>} />
          <Route path="/tomorrow" element={<Tomorrow />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
