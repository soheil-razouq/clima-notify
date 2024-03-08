import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import Navbar from '../Navbar/Navbar';
import "leaflet/dist/leaflet.css";

const WeatherMap = () => {
    const apiKey = 'f2e41bbf55c69a846243962a4b951b76';
    const [MapLayer, setMapLayer] = useState("clouds");
    const getLayer = (e) => {
        setMapLayer(e.target.value)
    }
    return (
        <div className="container">
            <Navbar />
            <div className="row pt-4">
                <div className="col-3">
                    <div class="list-group">
                        {/* for the other layers need licence api */}
                        {/* <button type="button" class="list-group-item list-group-item-action" value="temperature" onClick={getLayer}>Temperature</button> */}
                        <button type="button" class="list-group-item list-group-item-action" value="pressure" onClick={getLayer}>Pressure</button>
                        {/* <button type="button" class="list-group-item list-group-item-action" value="windspeed" onClick={getLayer}>Wind speed</button> */}
                        <button type="button" class="list-group-item list-group-item-action" value="clouds" onClick={getLayer}>Clouds</button>
                        {/* <button type="button" class="list-group-item list-group-item-action" value="radar" onClick={getLayer}>Global Precipitation </button> */}
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 md-10 mt-10 pt-5" >
                    <MapContainer
                        center={[0, 0]}
                        zoom={5}
                        style={{ height: '35vw', width: '60vw' }}
                    >
                        <TileLayer
                            url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=DYAQhMjPhq0nSOazVIiB"
                            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                        />
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/${MapLayer}/{z}/{x}/{y}.png?appid=${apiKey}`}
                            attribution='&copy; OpenWeatherMap'
                        />
                    </MapContainer>
                </div>
            </div>
        </div>

    );
};

export default WeatherMap;
