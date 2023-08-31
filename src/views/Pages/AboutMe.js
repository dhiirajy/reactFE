// src/Pages/AboutMe.js

import React, { useEffect, useState } from 'react';
import fetchData from '../../Service/apiService';
import { Container } from 'react-bootstrap';

const AboutMe = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetchData('/about')
      .then(apiData => setAbout(apiData))
      .catch(error => console.error('Error in component:', error));
  }, []);

  const backgroundImageUrl = 'url("https://i.stack.imgur.com/od6Ln.jpg")';

  const containerStyle = {
    background: backgroundImageUrl,
    backgroundSize: 'cover', 
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <Container fluid style={containerStyle}>
      <div className="col-md-12 pt-4 mt-4">
        <div className="row center mb-5">
          <div className="col-md-3 mb-3 m-3 center">
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
    </Container>
  );
};

export default AboutMe;
