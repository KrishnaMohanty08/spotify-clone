const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const client_id =process.env.SPOTIFY_CLIENT_ID;
const client_secret =process.env.SPOTIFY_CLIENT_SECRET;

// const client_id = '8902b78f76b04dc08c13325d609d934';
// const client_secret = '3e0b2941e87d4248ab4586a0a57e44bd';
let accessToken = "";

async function getSpotifyToken() {
    try {
        console.log("Fetching Spotify token...");
        console.log("Client ID:", process.env.SPOTIFY_CLIENT_ID);
        const response = await axios.post(
            "https://accounts.spotify.com/api/token",
            new URLSearchParams({ grant_type: "client_credentials" }),
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString("base64")}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        accessToken = response.data.access_token;
        console.log("Access Token Fetched:", accessToken);
    } catch (error) {
        console.error("Error fetching Spotify token:", error.response?.data || error.message);
    }
}
async function ensureSpotifyToken() {
    if (!accessToken) {
        await getSpotifyToken();
    }
}
// Fetch Playlists
app.get("/playlists/:playlistId", async (req, res) => {
    await ensureSpotifyToken();
    const playlistId = req.params.playlistId;

    try {
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const playlists = response.data.tracks.items.map((item) => ({
            name: item.track.name,
            artist: item.track.artists.map((artist) => artist.name).join(", "),
            image: item.track.album.images[0]?.url,
        }));

        res.json(playlists);
    } catch (error) {
        res.status(500).json({ error: "Error fetching playlists" });
    }
});

// Refresh token every hour
setInterval(getSpotifyToken, 3600 * 1000);
getSpotifyToken();

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
