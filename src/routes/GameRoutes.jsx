import React from 'react'
 import GamePage from '../component/game_page/GamePage'
 import GameRoll from '../component/game_roll/GameRoll'
import { Route, Routes } from 'react-router-dom'
const GameRoutes=()=> {
  return (
    <Routes>
      <Route path='/' element={<GamePage/>}/>
       <Route path='/game' element={<GameRoll/>}/>
    </Routes>
  )
}

export default GameRoutes
