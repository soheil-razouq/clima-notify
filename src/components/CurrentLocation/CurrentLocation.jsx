import React from 'react';
import { useEffect, useState } from "react";

export default function CurrentLocation() {
    const [error, setError] = useState(null);
    const [dataByCurrentLocation, setDataByCurrentLocation] = useState();
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

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

    return (
        <>
            <button type="button" class="btn btn-success" onClick={getLocation()}>Current Location</button>
        </>
    )
}