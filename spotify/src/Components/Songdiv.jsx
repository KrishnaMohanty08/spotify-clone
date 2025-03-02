import react, { useState, useEffect } from 'react';
import React from 'react'
import MusicPlayer from './MusicPlayer';
import nextsong from 'K:/CODING/frontend/App/spotify/src/assets/nextsong.svg'
import prevsong from 'K:/CODING/frontend/App/spotify/src/assets/prevsong.svg'
import pause from 'K:/CODING/frontend/App/spotify/src/assets/pause.svg'
import play from 'K:/CODING/frontend/App/spotify/src/assets/play.svg'


function Songdiv({ currentSong, isPlaying, togglePlay }) {
  const [playSong, setPlay] = useState(pause);
  const togglePly = () => {
    setPlay((prevState) => (prevState === pause ? play : pause));
  };

  return (
    <div className="Playing-bar">
      <div className="currSong">
        {currentSong ? `${currentSong.name} - ${currentSong.artist}` : "No song playing"}
      </div>
      <div className="playing">
        <button className="play-btn">
          <img src={prevsong} alt="Previous" className="ply" />
        </button>
        <button onClick={togglePlay} className="play-btn">
          <img
            src={isPlaying ? pause : play}
            alt={isPlaying ? "Pause" : "Play"}
            className="ply"
          />
        </button>
        <button className="play-btn">
          <img src={nextsong} alt="Next" className="ply" />
        </button>
      </div>
      {currentSong && (
        <iframe
          src={currentSong.embedUrl}
          width="100%"
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          loading="lazy"
        />
      )}
    </div>
  );
}

export default Songdiv;
