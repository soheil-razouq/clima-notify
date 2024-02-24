import { Link } from "react-router-dom";
import "./navbar.css"
export default function Navbar() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <a className="navbar-brand" href="/">
                            <img src="./weather-logo.png" width="105" height="105" alt="" />
                        </a>
                    </div>
                    <div className="col-8">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                            <ul className="navbar-nav ">
                                <li className="nav-item ">
                                    <Link to={"/"} className="text-decoration-none nav-link">Today</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/tomorrow"} className="text-decoration-none nav-link">Tomorrow</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/weathermap"} className="text-decoration-none nav-link">Weather Map</Link>
                                </li>
                                <li className="nav-item float-end float-right">
                                    <Link to={"/news"} className="text-decoration-none nav-link">News</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-2 pt-3">
                        <button type="button" class="btn btn-success border-radius-7">Success</button>
                    </div>
                </div>
            </div>
        </>
    )
}