import { ReactNode } from "react"

interface ThumbnailProps {
  imgURL?: string,   
  isLoading?: boolean, 
  isError?: boolean, 
} 

const Thumbnail = ({ isError, isLoading, imgURL } : ThumbnailProps) : JSX.Element  => {
  if (isError) {
    return(<div> HAS ERROR FOLK</div>)
  }
  if (isLoading) {
    return(<div> IS LOADING FOLK </div>)
  }
  return (<img style={{maxWidth : '100%'}} src={imgURL} />)
} 

export {
  Thumbnail,
}