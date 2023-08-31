import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationMenu from './components/Navbars/NavigationMenu';
import Index from './views/Pages/Index';
import About from './views/Pages/AboutMe';
import Projects from './views/Pages/Projects';
import Achievements from './views/Pages/Achievements';
import Blogs from './views/Pages/Blogs';
import Footer from "./components/Footer/Footer";
import {
  Container
} from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Container fluid className='main-panel'>
      <NavigationMenu />
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
