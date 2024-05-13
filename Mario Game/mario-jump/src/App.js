import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [marioBottom, setMarioBottom] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [pipeRight, setPipeRight] = useState(-80);

  useEffect(() => {
    const loop = setInterval(() => {
      if (pipeRight <= 120 && pipeRight > 0 && marioBottom < 80) {
        clearInterval(loop);
      }
    }, 10);
    return () => clearInterval(loop);
  }, [pipeRight, marioBottom]);

  const jump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setMarioBottom(180);
      setTimeout(() => {
        setIsJumping(false);
        setMarioBottom(0);
      }, 500);
    }
  };

  return (

    <div className="game-board" onClick={jump}>
      <img src="./images/clouds.png" className="clouds" alt="clouds" style={{ right: -550 }} />
      <img src="./images/pipe.png" className="pipe" alt="pipe" style={{ right: pipeRight }} />
      <img
        src="./images/mario.gif"
        className={isJumping ? 'mario jump' : 'mario'}
        alt="mario"
        style={{ bottom: marioBottom }}
      />
    </div>
  );
}

export default App;
