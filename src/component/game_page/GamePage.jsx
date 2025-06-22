import './GamePage.css';
import { useNavigate } from 'react-router-dom';
const GamePage = () => {
    const navigate = useNavigate();
  return (
    <main className="game-page">
      <section className="game-image">
        <img src='/GameImage/dice.png' alt="Dice Game"  />
      </section>
      <section className="game-content">
        <h1 className='contact-text'>DICE GAME</h1>
        <button type="button" className='button'onClick={() => navigate('/game')}
>Play Now</button>
      </section>
    </main>
  );
};
export default GamePage;
