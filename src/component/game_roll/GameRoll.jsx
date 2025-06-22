import React, { useEffect, useState } from 'react';
import './GameRoll.css';
import ShowRule from '../rule/ShowRule';
import NotSelected from '../notsalect/NotSelected';

const GameRoll = () => {
  const diceNumbers = [1, 2, 3, 4, 5, 6];
  const [showRules, setShowRules] = useState(false);
  const [random, setRandom] = useState(1);
  const [value, setValue] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [score, setScore] = useState(0);

  const handleDiceClick = (num) => {
    setValue(num);
  };

  const handeleRandomValues = () => {
    if (isRolling) return;

    if (value === 0) {
      alert("Please select a number before rolling the dice!");
      return;
    }

    setIsRolling(true);

    const audio = new Audio('/Sound/dice-142528.mp3');
    audio.play();

    let interval = setInterval(() => {
      setRandom((prev) => (prev === 6 ? 1 : prev + 1));
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const final = Math.floor(Math.random() * 6) + 1;
      setRandom(final);
      setIsRolling(false);

    

    
    }, 1500); // Roll for 1.5 seconds
  };

  const handleReset = () => {
    setValue(0);
    setScore(0);
  };

  // Optional: Log value change for debugging
  useEffect(() => {
    console.log(random + " random", value + " value");
    if(random==value){
 setScore(score+1)
    }

  }, [random]);

  return (
    <main className="game-roll-container">
      <div className="result-box">
        {value !== 0 && (
          <h1 className={random === value ? 'win-text' : 'lose-text'}>
            {random === value ? "🎉 WIN" : "😢 LOSE"}
          </h1>
        )}
        <div className="NoteSelected">
          {!value && <p><NotSelected /></p>}
        </div>
      </div>

      <section className="score-section">
        <div>
          <h1 className="score">{score}</h1>
          <p>Total Score</p>
        </div>
        <div>
          <div className="dice-buttons">
            {diceNumbers.map((num) => (
              <button
                key={num}
                  className={`dice-button ${value === num ? 'active' : ''}`}
                onClick={() => handleDiceClick(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="dice-section">
        <img
          src={`/GameImage/dice_${random}.png`}
          alt="Dice face"
          className={`dice-image ${isRolling ? 'rolling' : ''}`}
          onClick={handeleRandomValues}
        />
        <p className="dice-instruction">Click on Dice to roll</p>
        <div className="control-buttons">
          <button className="reset-button" onClick={handleReset}>
            Reset Score
          </button>
          <button
            className="rules-button"
            onClick={() => setShowRules(!showRules)}
          >
            {showRules ? 'Hide Rules' : 'Show Rules'}
          </button>
        </div>
      </section>

      <header>{showRules && <ShowRule />}</header>
    </main>
  );
};

export default GameRoll;
