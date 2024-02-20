import { Link } from "react-router-dom"
import "./navbar.css"
export default function Navbar() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="navbar-brand" href="#">
                                    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
                                </a>
                            </li>
                            <li className="nav-item ">
                                <Link to={"/"} className="text-decoration-none nav-link">Today</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={"/tomorrow"} className="text-decoration-none nav-link">Tomorrow</Link>
                            </li>
                            <li className="nav-item float-end float-right">
                            <Link to={"/news"} className="text-decoration-none nav-link">News</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}