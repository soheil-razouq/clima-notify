import Navbar from "../Navbar/Navbar";
import React, { useEffect } from 'react';
import { useState } from 'react';


export default function Today(props) {
    // consts
    const [dataByLocation, setDataByLocation] = useState();
    const [cityInput, setCityInput] = useState("");
    const [error, setError] = useState(null)
    const DaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const FullDateToday = new Date();
    const TodayName = DaysOfWeek[FullDateToday.getDay()];
    const dayOfMonth = FullDateToday.getDate();


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
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=f2e41bbf55c69a846243962a4b951b76`);
            const data = await response.json();
            setDataByLocation(data);
        } catch (error) {
            setError("error here in fetch data")
            console.error('Error fetching initial weather data:', error);
        }
    };
    //show images by wather status
    const getWeatherImage = () => {
        const weatherStatus = dataByLocation.list[0].weather[0].main;
        const imageMap = {
            'Sun': './sunny.jpg',
            'Clear': './sunny.jpg',
            'Clouds': './cloudy.jpg',
            'Rain': './rainy.jpg',
            'Snow': './snowy.jpg',
            'Wind': './windy.jpg',
        };
        const imageSource = imageMap[weatherStatus];
        return imageSource;
    };
    //Increament forecast day
    const forecastDays = (todayDay, forecastDayNum) => {
        const ShortDaysOfWeek = [
            'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
        ];
        for (let index = 0; index < ShortDaysOfWeek.length; index++) {
            if (index = 6) {
                index += 0
                if (todayDay.substring(0, 3) == ShortDaysOfWeek[index]) {
                    const day1 = ShortDaysOfWeek[index + 1];
                    const day2 = ShortDaysOfWeek[index + 2];
                    const day3 = ShortDaysOfWeek[index + 3];
                    const day4 = ShortDaysOfWeek[index + 4];
                    // if(forecastDayNum == 1){
                    //     return day1 ;
                    // }

                    return day2;;
                }
            }

        }
    };
    console.log(forecastDays(TodayName));

    return (
        <>
            <div className="container">
                <Navbar />
                <div className="row">
                    <div className="col-2 pg-4">
                        Dark Mode<input className="form-check-input" type="checkbox" />Light Mode
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6 p-4">
                        <form className="form-inline" onSubmit={getWeatherDataByLocation}>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="bi bi-search"></i></div>
                                </div>
                                <input className="form-control mr-sm-2 justify-content-center" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setCityInput(e.target.value)} />
                            </div>
                        </form>
                    </div>
                </div>

                {dataByLocation
                    ? (
                        <>
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-8 col-xl-6 p-5">
                                    <div className="card bg-dark text-white" >
                                        <img
                                            src={getWeatherImage()}
                                            className="card-img"
                                            alt="weather"
                                            style={{ opacity: "0.8" }}
                                        />
                                        <div
                                            className="card-img-overlay text-dark p-5"
                                            style={{ border: "5px", backgroundColor: "rgba(190, 216, 232, .5)" }}
                                        >
                                            <h4 className="col-5 mb-0">{dataByLocation.city.name},{dataByLocation.city.country}</h4>
                                            <p className="display-2 my-3">{(dataByLocation.list[0].main.temp - 273.15).toFixed(2)} °C</p>
                                            <p className="mb-2">
                                                Feels Like: <strong>{(dataByLocation.list[0].main.feels_like - 273.15).toFixed(2)} °C</strong>
                                            </p>
                                            <h5>{dataByLocation.list[0].weather[0].description}</h5>
                                            <div className="row justify-content-end">
                                                <div className="col-4 card-footer-fluid">
                                                    <h4>{TodayName}</h4>
                                                    <p>{formattedDateString}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="card mb-4" style={{ borderRadius: "25px" }}>
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-around text-center pb-3 pt-2">
                                            <div className="flex-column">
                                                <p className="small">
                                                    <strong>{forecastDays(TodayName)}</strong>
                                                </p>
                                                <i className="fas fa-sun fa-2x mb-3" style={{ color: "#ddd" }}></i>
                                                <p className="mb-0">
                                                    <strong>{(dataByLocation.list[1].main.temp - 273.15).toFixed(2)} °C</strong>

                                                </p>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                    :
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-6 p-5">
                            <div className="card bg-danger text-white " >
                                No data
                            </div>
                        </div>
                    </div>
                }


            </div>
        </>
    )
}