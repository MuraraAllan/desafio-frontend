import axios from "axios"

export async function fetchChannels(searchTerm: string) {
  const params : any = {
    type: 'channel',
    maxResults: 12,
    q: searchTerm, 
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    part: 'snippet', 
  }

  return await axios.get('https://www.googleapis.com/youtube/v3/search/', { params })
}



