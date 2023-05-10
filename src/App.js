import React from "react";
import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";


function App() {
  const [Images, setImages] = useState(
    {
      num: 1,
      id: 'img1',
      src: "../img/AR-VR.jpg",
    },
    {
      num: 2,
      id: 'img2',
      src: "../img/coding.gif",
    },
    {
      num: 3,
      id: 'img3',
      src: "../img/AR-VR.jpg",
    },
    {
      num: 4,
      id: 'img4',
      src: "../img/coding.gif",
    },
    {
      num: 5,
      id: 'img5',
      src: "../img/AR-VR.jpg",
    },
    {
      num: 6,
      id: 'img6',
      src: "../img/coding.gif",
    }
  );
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Banner text='Tech-Quick' type='hero-banner_title'/>
        <Gallery links={Images}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
