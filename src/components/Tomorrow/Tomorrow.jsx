import Navbar from "../Navbar/Navbar";

function Tomorrow() {

    return (
        <>
            <div className="container">
                <Navbar />
                <div className="row justify-content-center p-5">
                    <div className="col-5">
                        <div className="card bg-dark text-white" >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                                className="card-img"
                                alt="weather"
                            />
                            <div
                                className="card-img-overlay text-dark p-5"
                                style={{ borderRadius: "35px", backgroundColor: "rgba(190, 216, 232, .5)" }}
                            >
                                <h4 className="col-3 mb-0">Juneau, Alaska, US</h4>
                                <p className="display-2 my-3">1.28°C</p>
                                <p className="mb-2">
                                    Feels Like: <strong>-1.08 °C</strong>
                                </p>
                                <h5>Snowy</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="row" style={{ backgroundColor: "gray" }}>
                            <h4>today highlights</h4>
                        </div>
                        <div className="row" style={{ backgroundColor: "rgb(255, 183, 183)" }}>
                            <div className="col-4">
                                air quality index here
                            </div>
                            <div className="col-3">
                                <h4>Sunrise :</h4>
                                <p>(new Date(dataByLocation.city.sunrise * 1000)).getHours() + 'H'
                                    &nbsp;
                                    (new Date(dataByLocation.city.sunrise * 1000)).getMinutes() + 'Min'</p>
                                < h4 > Sunset :</h4>
                                    <p>(new Date(dataByLocation.city.sunrise * 1000)).getHours() + 'H'
                                        &nbsp;
                                        (new Date(dataByLocation.city.sunrise * 1000)).getMinutes() + 'Min'</p>
                            </div>
                        </div>
                        <div className="row" style={{ backgroundColor: "rgb(153, 183, 134)" }}>
                            <div className="col">(dataByLocation.list[0].main.temp_max - 273.15).toFixed(2) °C</div>
                            <div className="col">(dataByLocation.list[0].main.temp_max - 273.15).toFixed(2) °C</div>
                            <div className="col">dataByLocation.list[0].main.humidity</div>
                            <div className="col">dataByLocation.list[0].wind.speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tomorrow;