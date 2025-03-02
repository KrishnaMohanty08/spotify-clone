import react,{useState,useEffect} from 'react';
import React from 'react'
import playlist from 'K:/CODING/frontend/App/spotify/src/assets/playlist.svg'
import collection from 'K:/CODING/frontend/App/spotify/src/assets/hamburger.svg'

function Sidebar() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <div className='side-bar'>
            <button className="side-btn">
                <img src={playlist} alt="collection" className='playlist'/>
            </button>
            <button className="side-btn">
            <img src={collection} alt="collection" className='playlist'/>
            </button>
            <button className="side-btn">utem2</button>
        </div>
        
      </>
    )
  }
  
  export default Sidebar
