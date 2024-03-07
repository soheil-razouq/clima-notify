import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

export default function News() {
    
    return (
        <>
            <div className="container">
                <Navbar />
                <div className="row justify-content-end">
                    <div className="col-8 md-6">
                        <img src="./weather-logo.png" alt="logo" />
                    </div>
                </div>
                HERE SHOW THE  NEWS!
            </div>
            </>
            )
}