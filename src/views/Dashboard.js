import React, { useEffect, useState } from 'react';
import fetchData from '../Service/apiService';

import {
    Badge,
} from "react-bootstrap";

function Dashboard() {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetchData('/about')
            .then(apiData => setAbout(apiData))
            .catch(error => console.error('Error in component:', error));
    }, []);
    return (
        <section id="about">
            <div className="col-md-12 pt-4">
                <h1 style={{ color: "black" }}>
                </h1>
                <div className="row center mx-auto mb-5">
                    <div className="col-md-3 mb-3 m-3" style={{ textAlign: "center"}}>
                        <div className="polaroid">
                            <span style={{ cursor: "auto" }}>
                                <img
                                    height="250px"
                                    src='avatar.png'
                                    alt="Avatar placeholder"
                                />
                            </span>
                        </div>
                        <p style={{ cursor: "auto" }}>
                            {about.skills && about.skills.length > 0 && (
                                <span>
                                    {about.skills.map((skill, index) => (
                                        <Badge>{skill}</Badge>
                                    ))}
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="col-md-8 center">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card-header">
                                    {about.about} ...
                                    <span
                                        className="iconify"
                                        data-icon="twemoji:green-circle"
                                        data-inline="false"
                                    ></span>
                                </div>
                                <div
                                    className="card-body text-justify ml-3 mr-3"
                                    style={{
                                        height: "auto",
                                        fontSize: "132%",
                                        lineHeight: "200%",
                                        fontFamily: "serif"
                                    }}>
                                    <span>{about.description} </span>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
