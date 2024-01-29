import React from 'react'
import './App.css'
import Pic from "./Image/icon.png"

import Cardone from './compoent-one/cardone'
import Explore from'./Component-two/Explore'
import Build from './component-three/Build'
import Join from './component-four/Join'

function App() {
  
  return (
  <>
  <div className="main">
    <div className="navbar">
<img src={Pic} alt="" className='logo' />
<h3>Your job application</h3>
    </div>
    <div className="find">
      <h2>Find jobs</h2>
      <input type="text"placeholder='Search for jobs by title  or ketword' />
      <input type="text"placeholder='Location' />
    </div>
  </div>

 <Cardone/>
 <Explore/>
 <Build/>
 <Join/>

  
  </>
  )
}

export default App
