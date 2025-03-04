import axios from "axios";

export async function fetchPlaylists(playlistId) {
    try {
        const response = await axios.get(`http://localhost:5175/playlists/${playlistId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching playlists:", error.message);
        return [];
    }
}
