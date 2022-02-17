import axios from "axios"

export async function fetchChannels(searchTerm: string) {
    const params = {
    type: 'video',
    maxResults: 8,
    q: searchTerm, 
    key: 'AIzaSyBZ--nEkyorU89iKVYDLTbEb8zZTLi7PyM', // move to env
    part: 'snippet'
  }

  return await axios.get('https://www.googleapis.com/youtube/v3/search/', { params })
}