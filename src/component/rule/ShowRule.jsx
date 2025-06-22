import React from 'react'
import './ShowRule.css'
const ShowRule=()=> {
  return (
   <div className="rules-box">
  <h1>How to play dice game</h1>
  <p>Select any number</p>
  <p>Click on dice image</p>
  <p>
    After clicking on the dice, if your selected number matches the dice number,  
    you will earn the same points.  
    If your guess is wrong, 2 points will be deducted.
  </p>
</div>

  )
}

export default ShowRule;
