import Navbar from "../Navbar/Navbar"


export default function Today() {

    return (
        <>
            <div className="container">
                <Navbar />

                <div className="row">
                    <div className="col-2 pg-4">
                        Dark Mode<input class="form-check-input" type="checkbox" />Light Mode
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-6 p-4">
                        <form class="form-inline">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="bi bi-search"></i></div>
                                </div>
                                <input className="form-control mr-sm-2 justify-content-center" type="search" placeholder="Search" aria-label="Search" />
                            </div>
                        </form>
                    </div>
                </div>

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

                <div className="row justify-content-center">
                    <div className="card mb-4" style={{ borderRadius: "25px" }}>
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-around text-center pb-3 pt-2">
                                <div className="flex-column">
                                    <p className="small">
                                        <strong>21°C</strong>
                                    </p>
                                    <i className="fas fa-sun fa-2x mb-3" style={{ color: "#ddd" }}></i>
                                    <p className="mb-0">
                                        <strong>Mon</strong>
                                    </p>
                                </div>

                                <div className="flex-column">
                                    <p className="small">
                                        <strong>20°C</strong>
                                    </p>
                                    <i className="fas fa-sun fa-2x mb-3" style={{ color: "#ddd" }}></i>
                                    <p className="mb-0">
                                        <strong>Tue</strong>
                                    </p>
                                </div>

                                <div className="flex-column">
                                    <p className="small">
                                        <strong>21°C</strong>
                                    </p>
                                    <i className="fas fa-sun fa-2x mb-3" style={{ color: "#ddd" }}></i>
                                    <p className="mb-0">
                                        <strong>Wen</strong>
                                    </p>
                                </div>

                                <div className="flex-column">
                                    <p className="small">
                                        <strong>21°C</strong>
                                    </p>
                                    <i className="fas fa-sun fa-2x mb-3" style={{ color: "#ddd" }}></i>
                                    <p className="mb-0">
                                        <strong>Thu</strong>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}