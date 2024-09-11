import React from 'react'
import players from './Players'
import Player from './Player'
function playerslist() {

  return (
    <div style={{display:"flex",justifyContent:"space-around",}}>
        {players.map(el=>
            <Player Player={el}/>
        )}
    </div>
  )
}

export default playerslist


