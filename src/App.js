import './App.css';
import ImageComponent from './Components/imageComponent';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import React from 'react';
import { Link, Routes, Route } from "react-router-dom";

import Directory from './Pages/Directory.js'
import Homepage from './Pages/Homepage';
import ScreenshotsPage from './Pages/ScreenshotsPage';
function App() {

  useEffect(() => {

  });
  const overlayImages = (e) => {
    document.querySelector('.App').classList.add("overlay")
  }

  const restoreImages = (e) => {
    //e.target.className 
    //this.classList.add("sdssdsd");
    console.log('click');
    document.querySelector('.App').classList.remove("overlay")
  }
  return (
    <div className="App">

      <Routes>

      <Route
          path="/directory/screenshots/:pathname"
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

    </div>
  );
}

export default App;
