import { useParams } from "react-router-dom"


const SearchPage = () => {
    const {city} = useParams();
  return (
    <div>user search for {city}</div>
  )
}

export default SearchPage