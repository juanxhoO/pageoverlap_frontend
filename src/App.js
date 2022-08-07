import './App.css';
import ImageComponent from './Components/imageComponent';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Directory from './Pages/Directory.js'
import Homepage from './Pages/Homepage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ScreenshotsPage from './Pages/ScreenshotsPage';

function App() {
  let homepage = window.location.pathname;

  return (
    <div className="App">

      <Header />
      
        <Sidebar />

      
      <Routes>

        <Route
          path="/directory/screenshots"
          element={<ScreenshotsPage />}
        />

        <Route
          path="/"
          element={<Homepage />}
        />

        <Route
          path="/directory"
          element={<Directory />}
        />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
