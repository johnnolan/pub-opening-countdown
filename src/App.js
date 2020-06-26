import React from 'react';
import Countdown from './Components/Countdown';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Pick And Davy</h1>
      </header>
      <main>
        <Countdown
          timeTillDate="July, 04, 2020, 12:00:00"
        />
      </main>
    </>
  );
}

export default App;
