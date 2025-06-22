
import './App.css'
import GameRoutes from './routes/GameRoutes'
import { BrowserRouter } from 'react-router-dom';
const App=()=> {
  

  return (
  
        <BrowserRouter>
      <GameRoutes/>
    </BrowserRouter>
  
  )
}

export default App
