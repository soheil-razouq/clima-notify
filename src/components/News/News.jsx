import Navbar from "../Navbar/Navbar";

export default function News() {
    return (
        <>
            <div className="container">
                <Navbar />
                <div className="row justify-content-end">
                    <div className="col-8 md-6">
                        <img src="./weather-logo.png" alt="logo" />
                    </div>
                </div>
                <div className="row">
                    
                </div>
            </div>
        </>
    )
}

// import React, { useState, useEffect } from 'react';

// const WeatherApp = () => {
//   const [forecast, setForecast] = useState([]);

//   useEffect(() => {
//     const getCurrentDate = () => {
//       const currentDate = new Date();
//       const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//       const currentDay = days[currentDate.getDay()];

//       return currentDay;
//     };

//     const getNext4Days = () => {
//       const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//       const currentDate = new Date();
//       const currentDayIndex = currentDate.getDay();

//       const next4Days = [];
//       for (let i = 1; i <= 4; i++) {
//         const nextDayIndex = (currentDayIndex + i) % 7;
//         next4Days.push(days[nextDayIndex]);
//       }

//       return next4Days;
//     };

//     const fetchForecast = () => {
//       // Replace this with your API call or data fetching logic
//       // For simplicity, let's assume you have a function fetchWeatherData() that returns the forecast data
//       const forecastData = fetchWeatherData();

//       // Modify the data structure according to your API response
//       const formattedForecast = forecastData.map((day, index) => ({
//         day: getNext4Days()[index],
//         temperature: day.temperature, // Replace with the actual temperature data from your API
//       }));

//       setForecast(formattedForecast);
//     };

//     fetchForecast();
//   }, []);

//   return (
//     <div>
//       <h2>4-Day Forecast</h2>
//       <ul>
//         {forecast.map((day) => (
//           <li key={day.day}>
//             {day.day}: {day.temperature}°C
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default WeatherApp;
