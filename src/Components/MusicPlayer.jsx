import React, { useState } from 'react'
import SongList from './SongsList'
import SongDiv from './Songdiv'

const MusicPlayer = () => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = (song) => {
        if (currentSong && currentSong.name === song.name) {
            // If same song, just toggle play state
            setIsPlaying(!isPlaying);
        } else {
            // If new song, set it and start playing
            setCurrentSong(song);
            setIsPlaying(true);
        }
    };

    const handleTogglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player">
            <SongList
                onPlay={handlePlay}
                currentSong={currentSong}
                isPlaying={isPlaying}
            />
            <SongDiv
                currentSong={currentSong}
                isPlaying={isPlaying}
                togglePlay={handleTogglePlay}
            />
        </div>
    );
};

export default MusicPlayer;
