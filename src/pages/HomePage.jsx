import axios from "axios"
import { useState, useEffect } from "react"

const HomePage = () => {

  // variabile di stato
  const [movies, setMovies] = useState([])

  // funzione che recupera la lista film
  const fetchMovies = () => {
    axios.get(`http://localhost:3000/movies`).then((res) => {
      console.log(res.data)
      setMovies(res.data)
    }).catch((err) => console.log(err))
  }

  useEffect(fetchMovies, [])

  return (
    <div className="container pt-100 pb-5">
      <div className="row">
        <div className="col-12">
          <div className='text-center py-4'>
            <h1>BOOLBUSTER</h1>
            <h5>La libreria di film più grande al mondo!</h5>
          </div>
        </div>
      </div>
      <div className="row gy-3">
        {movies.map((book) => {
          const { id, title, director, genre, release_year, abstract, image } = book
          return (
            <div className="col-12 col-md-6 col-lg-4 pt-4" key={id}>
              <div className="card-movie">
                <img className='cover-movie' src={image} alt={title} />
                <div className="overlay">
                  <h2>{title}</h2><p>{release_year}</p>
                  <h5>GENRE: {genre} <br />
                    DIRECTOR: {director}</h5>
                  <p>{abstract}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
