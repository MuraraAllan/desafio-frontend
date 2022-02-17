import axios from "axios"
export async function fetchVideos(searchTerm: string) {
    const params = {
    type: 'video',
    maxResults: 8,
    q: searchTerm, 
    key: 'AIzaSyBZ--nEkyorU89iKVYDLTbEb8zZTLi7PyM',
    part: 'snippet'
  }
  return await axios.get('https://www.googleapis.com/youtube/v3/search/', { params })
}
