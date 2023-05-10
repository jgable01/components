import React from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Banner />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
