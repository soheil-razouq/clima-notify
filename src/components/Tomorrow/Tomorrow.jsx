import Navbar from "../Navbar/Navbar";

function Tomorrow() {

    return (
        <>
            <div className="container">
                <Navbar />

                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-6 p-5">
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
                </div>
            </div>
        </>
    )
}
export default Tomorrow;