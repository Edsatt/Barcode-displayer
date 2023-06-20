import React, {useState} from 'react';
import './App.css';
import Barcode from './barcode.js';
import Buttons from './buttons.js';

function App() {

  const [image, setImage] = useState(0);

  const nextImage = () => setImage(prevImage => prevImage +1);
  const reset = () => setImage(0);
  const randomImage = () => {
    setImage(Math.floor(Math.random() *63));
  }
  

  return (
    <div className='container'>
      <div className='image'>
        <Barcode src={image}/>
      </div>
      <Buttons next={nextImage} reset={reset} random={randomImage}/>
      <h3>Barcode number: {image}</h3>
    </div>
  );
}

export default App;
