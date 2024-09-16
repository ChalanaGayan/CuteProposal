import React, { useState } from 'react';
import './App.css';

function App() {
  const [isAnimating, setIsAnimating] = useState(false);

  const moveButton = () => {
    const noButton = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth) - 85;
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight) - 48;
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  };

  const startAnimation = () => {
    setIsAnimating(true);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
  };

  const nextPage = () => {
    window.location.href = "/yes";
  };

  return (
    <div className="container">
      <div>
        <h1 className="header_text">Hey!! Darling</h1>
        <h1 className="header_text">Do you wanna go out with me?</h1>
        <h1 className="header_text">Are you free tomorrow?</h1>
      </div>
      <div className={`gif_container ${isAnimating ? 'animate' : ''}`}>
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif" alt="Cute animated illustration" />
      </div>
      <div className="buttons">
        <button className="btn" id="yesButton" onClick={nextPage}>Yes</button>
        <button
          className="btn"
          id="noButton"
          onMouseOver={moveButton}
          onMouseEnter={startAnimation}
          onMouseLeave={stopAnimation}
        >
          No
        </button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>CGD @2024</p>
      </footer>
    </div>
  );
}

export default App;
