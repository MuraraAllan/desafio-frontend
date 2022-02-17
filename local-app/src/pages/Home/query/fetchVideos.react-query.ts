import axios from "axios"

export async function fetchVideos(searchTerm: string) {
  const params = {
    type: 'video',
    maxResults: 8,
    q: searchTerm, 
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    part: 'snippet'
  }
  return await axios.get('https://www.googleapis.com/youtube/v3/search/', { params })
}
