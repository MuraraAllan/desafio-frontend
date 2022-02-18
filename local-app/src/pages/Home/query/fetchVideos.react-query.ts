import axios from "axios"

export async function fetchVideos(searchTerm: string) {

  const params : any = {
    type: 'video',
    maxResults: 12,
    q: searchTerm, 
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    part: 'snippet', 
  }

  return await axios.get('https://www.googleapis.com/youtube/v3/search/', { params })
}



