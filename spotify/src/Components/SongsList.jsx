import React, { useState, useEffect } from "react";
import { fetchPlaylists } from "./api/apicalls";

function SongsList({ onPlay, currentSong, isPlaying }) {
    const [songs, setSongs] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getSongs() {
            try {
                const playlistId = "37i9dQZF1DZ06evO4nb11D";
                const data = await fetchPlaylists(playlistId);
                console.log("Fetched Data:", data); // Debugging
                setSongs(data);
            } catch (err) {
                console.error("Error fetching songs:", err);
                setError(true);
            }
        }
        getSongs();
    }, []);

    const playlist = [
        {
            name: "Sanam",
            artist: "Sanam",
            embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO4nb11D?utm_source=generator&theme=0",
        },
        {
            name: "Agam Agrawal",
            artist: "Alisa",
            embedUrl: "https://open.spotify.com/embed/playlist/0RJ54HvIGnRiirFLaM9pZN?utm_source=generator",
        },
        {
            name: "My top",
            artist: "Sessobin",
            embedUrl: "https://open.spotify.com/embed/playlist/02kldYnwbZnCLqhW2ZSU8T?utm_source=generator",
        },
        {
            name: "Jubin Nautiyal",
            artist: "Sessobin",
            embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1EIUpIBuD8AlJG?utm_source=generator",
        }
    ];

    const displayedSongs = error || songs.length === 0 ? playlist : songs;

    return (
        <div className="grid grid-rows-3 gap-3">
            {displayedSongs.map((song, index) => (
                <div key={index} className="border border-gray-300 p-4 text-center rounded-md">
                    {/*<h3 className="mt-2 font-bold">{song.name}</h3>
                    <p className="text-gray-600">{song.artist}</p>*/}
                    <iframe
                        src={song.embedUrl}
                        width="100%"
                        height="80"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                        loading="lazy"
                    />
                    
                </div>
            ))}
        </div>
    );
}

export default SongsList;
