import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./News.css"

export default function News() {
    const [mynews, setMyNews] = useState([]);

    const fetchData = async () => {
        let resonse = await fetch(
            "https://newsapi.org/v2/top-headlines?country=ma&?q=weather&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f"
        );
        let data = await resonse.json();
        setMyNews(data.articles);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="row">
                <Navbar />
            </div>
            <h1 className="text-center my-3">Breaking NEWS</h1>
            <div className="mainDiv">
                {mynews.map((ele) => {
                    return (
                        <>
                            <div class="card" style={{ marginTop: "2rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                <img src={ele.urlToImage == null ? "https://cdn.icon-icons.com/icons2/580/PNG/512/News_icon-icons.com_54984.png" : ele.urlToImage} class="card-img-top" alt="" height="180px" />
                                <div class="card-body">
                                    <h5 class="card-title">{ele.author == "" ? "Janelle Ash" : ele.author}</h5>
                                    <p class="card-text">
                                        {ele.title}
                                    </p>
                                    <div className="text-center">
                                        <a href={ele.url} target="_blank" class="btn btn-info text-center">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};
