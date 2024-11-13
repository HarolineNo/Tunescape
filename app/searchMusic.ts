// searchMusic.ts
import Soundcloud from 'soundcloud.ts';

const SOUNDCLOUD_CLIENT_ID='KKzJxmw11tYpCs6T24P4uUYhqmjalG6M&stage=';
const SOUNDCLOUD_OAUTH_TOKEN='2-296178-1465220799-S0nrwNQae3AD';

const soundcloud = new Soundcloud(process.env.SOUNDCLOUD_CLIENT_ID, process.env.SOUNDCLOUD_OAUTH_TOKEN);

export async function searchTracks(query: string) {
  try {
    // Search for tracks based on the query parameter
    const tracks = await soundcloud.tracks.search({ q: query });
    return tracks; // This will be an array of tracks matching the search
  } catch (error) {
    console.error("Error fetching tracks:", error);
  }
}
