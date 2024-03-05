import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

export default function News() {
    const [airPollutionData, setAirPollutionData] = useState("");
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const [error, setError] = useState(null)

    useEffect(() => {
        getWeatherDataByLocation()
    })

    const getWeatherDataByLocation = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=casablanca&appid=f2e41bbf55c69a846243962a4b951b76`);
            const data = await response.json();
            setLongitude(data.city.coord.lon);
            setLatitude(data.city.coord.lat);

            const responseAir = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=50&lon=50&appid=f2e41bbf55c69a846243962a4b951b76`);
            const AirData = await responseAir.json();
            setAirPollutionData(AirData);
            console.log("lat :",latitude)
            console.log("lon :",longitude)
            console.log("ai data :",AirData)
        } catch (error) {
            setError("error here in fetch data")
            console.error('Error fetching initial weather data:', error);
        }
    };
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
                    <div className="row text-center" style={{ backgroundColor: "gray" }}>
                        <h4>today highlights</h4>
                    </div>
                    {airPollutionData ? (
                        <>
                            <div className="col">
                                <div className="row">
                                    <div className="col flex-column">
                                        <p className="small">
                                            <strong>CO :</strong>
                                        </p>
                                        <p className="mb-0">
                                            {airPollutionData.list.components.co}
                                        </p>
                                    </div>
                                    <div className="col flex-column">
                                        <p className="small">
                                            <strong>NO2 :</strong>
                                        </p>
                                        <p className="mb-0">
                                            {airPollutionData.list.components.no2}
                                        </p>
                                    </div>
                                    <div className="col flex-column">
                                        <p className="small">
                                            <strong>O3 :</strong>
                                        </p>
                                        <p className="mb-0">
                                            {airPollutionData.list.components.o3}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : 
                    <div>
                        <h2>no data</h2>
                    </div>
                    }

                    </div>
            </div>
            </>
            )
}