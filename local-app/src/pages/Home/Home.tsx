import { useQuery } from "react-query"
import { useSessionStore } from "../../storage"
import { fetchVideos } from "./query/fetchVideos.react-query"

export function HomePage(){
  const { searchTerm } = useSessionStore()

  const data = useQuery(['videos', searchTerm], () => fetchVideos(searchTerm))
  console.log('DATA IS', data)
  return (<>
    <div> DFSIOUSOFAIFD SHOME</div>
  </>) 
}