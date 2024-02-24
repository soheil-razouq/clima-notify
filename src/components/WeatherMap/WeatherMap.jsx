// WeatherMap.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import Navbar from '../Navbar/Navbar';
import "leaflet/dist/leaflet.css";

const WeatherMap = () => {
    const apiKey = 'f2e41bbf55c69a846243962a4b951b76';



    return (
        <div className="container">
            <Navbar />
            <div className="row pt-4">
                <div className="col-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem rerum corporis corrupti ducimus, officiis tenetur!
                </div>

                <div className="col-10 ">
                    <MapContainer
                        center={[0, 0]}
                        zoom={5}
                        style={{ height: '40vw', width: '60vw' }}
                    >
                        <TileLayer
                            url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=DYAQhMjPhq0nSOazVIiB"
                            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                        />
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=${apiKey}`}
                            attribution='&copy; OpenWeatherMap'
                        />
                    </MapContainer>
                </div>
            </div>
        </div>

    );
};

export default WeatherMap;
