import axios from "axios"
import { useState } from "react"

export async function fetchVideos(searchTerm: string, pageParam?: string) {
  console.log(process.env.REACT_APP_YOUTUBE_API_KEY)
  const params : any = {
    type: 'video',
    maxResults: 8,
    q: searchTerm, 
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    
    // access_token: 'ya29.A0ARrdaM_Jgbyl-GKMkd4GaUwgDLcDBIJMXbRvE2ihmMqXt2SrJAhqbKz_7zIpWxas_9GZNJ1LYfQZQJOCaQ8ibsPK5zHK40_OjkyLK3su6q4lmA70vvOC49cu_F3U4Lu4QTMr2H7ICfHV3dg6KP3svFrDNVsD',
    part: 'snippet', 
  }
  console.log('GOING TO FETCH', searchTerm)
  // if (pageParam != null) {
  //   delete params.q
  //   params.pageToken = pageParam
  // }
  return await axios.get('https://www.googleapis.com/youtube/v3/search/', { params })
}


