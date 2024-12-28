import React from "react";
import "./App.css";
import yellowBag from "./yellowBag.jpg"; // Replace with the actual yellow bag image
import orangeBag from "./orangeBag.jpg"; // Replace with the actual orange bag image
import smallCatCircle from "./smallCatCircle.jpg"; // Replace with the small cat circle image
import bigCatCircle from "./smallCatCircle.jpg"; // Replace with the big cat circle image

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
  <div className="App-logo">
    <img src="smallCatCircle.jpg" alt="Logo" className="App-header-logo" /> {/* Add the logo image */}
    <h1>SMALLS</h1>
  </div>
  <nav>
    <ul className="App-nav">
      <li>Fav (2)</li>
      <li>Cart (1)</li>
      <li>Login</li>
    </ul>
  </nav>
</header>


<section className="App-hero">
  <div className="App-hero-content">
    <div className="App-hero-left">
      <ul>
        <li>Why Smalls? <span>→</span></li>
        <li>Behind Our Food <span>→</span></li>
        <li>Smalls Reviews <span>→</span></li>
        <li>FAQs <span>→</span></li>
        <li>Stores <span>→</span></li>
      </ul>
      <button className="App-watch-video">Watch Video</button>
    </div>
   
    <div className="App-hero-right">
      <h2>Voted #1 Healthiest Cat Food 🐱🥩</h2>
      <p>100% Healthy and Quality Full</p>
      <div className="App-hero-images">
        <div className="App-yellow-bag">
          <img src={yellowBag} alt="Yellow Bag" className="App-hero-image" />
        </div>
        <div className="App-orange-bag">
          <img src={orangeBag} alt="Orange Bag" className="App-hero-image" />
        </div>
      </div>
    </div>
  </div>
</section>
<div></div>

      {/* Customer Section */}
      <section className="App-customer-section">
        <h2>88% OF CUSTOMERS 🐾 REPORT HEALTH IMPROVEMENTS AFTER SWITCHING</h2>
        <div className="App-customer-text">
         
        </div>
       
      </section>
    </div>
  );
}

export default App;
