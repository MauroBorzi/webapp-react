import axios from "axios"
import { useState, useEffect, useContext } from "react"
import GlobalContext from "../contexts/globalContext"
import MovieCard from "../components/MovieCard"

const HomePage = () => {

  // variabile di stato
  const [movies, setMovies] = useState([])
  const { setIsLoading } = useContext(GlobalContext)

  // funzione che recupera la lista film
  const fetchMovies = () => {
    setIsLoading(true)
    axios.get(`http://localhost:3000/movies`).then((res) => {
      setMovies(res.data)
      setIsLoading(false)
    }).catch((err) => console.log(err))
  }

  useEffect(fetchMovies, [])

  return (
    <div className="container pt-100 pb-5">
      <div className="row">
        <div className="col-12">
          <div className='text-center py-4'>
            <h1>BOOLBUSTER</h1>
            <h5>The largest movie library in the world!</h5>
          </div>
        </div>
      </div>
      <div className="row gy-3">
        {movies.map((movie) => {
          const { id } = movie
          return (
            <MovieCard key={id} movie={movie} />
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
