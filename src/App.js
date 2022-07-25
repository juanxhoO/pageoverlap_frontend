import './App.css';
import ImageComponent from './Components/imageComponent';
import { useEffect } from 'react';
import Button from '@mui/material/Button';

function App() {

  useEffect(() => {

  });

  const overlayImages = (e) => {
    //e.target.className 
    //this.classList.add("sdssdsd");
    console.log('click');
    document.querySelector('.App').classList.add("overlay")
  }
  return (
    <div className="App">



      <div className='mainContainer'>

        <ImageComponent onClick={overlayImages}></ImageComponent>
        <ImageComponent onClick={overlayImages}></ImageComponent>
        <ImageComponent onClick={overlayImages}></ImageComponent>
        <ImageComponent onClick={overlayImages}></ImageComponent>


      </div>

      <Button className="overlayButton" onClick={overlayImages} variant="contained">Overlap Images</Button>



    </div>
  );
}

export default App;
