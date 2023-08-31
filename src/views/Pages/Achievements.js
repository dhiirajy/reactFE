// src/Pages/Achievements.js

import React, { useEffect, useState } from 'react';
import fetchData from '../../Service/apiService';
import {
  Container,
  ListGroup,
} from "react-bootstrap";


const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  useEffect(() => {
    fetchData('/achievements')
      .then(apiData => setAchievements(apiData))
      .catch(error => console.error('Error in component:', error));
  }, []);
  const backgroundImageUrl = 'url("https://images.unsplash.com/photo-1528263140907-8dc1a9d92bdf")'; 

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
                  Achievements ...
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
                  {achievements.map(achievement => (
                    <ListGroup.Item>{achievement.title}</ListGroup.Item>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container >

  );
};

export default Achievements;
