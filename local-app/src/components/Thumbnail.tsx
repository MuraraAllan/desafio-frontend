import { Text } from "."

interface ThumbnailProps {
  imgURL?: string,   
  isLoading?: boolean, 
  isError?: boolean, 
} 

const Thumbnail = ({ isError, isLoading, imgURL } : ThumbnailProps) : JSX.Element  => {
  if (isError) {
    return(<Text>Erro</Text>)
  }
  if (isLoading) {
    return(<Text>Loading</Text>)
  }
  return (<img style={{maxWidth : '100%'}} alt="any textalt" src={imgURL} />)
} 

export {
  Thumbnail,
}