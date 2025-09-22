import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const DetailPage = () => {

  const { id } = useParams()

  const [movies, setMovies] = useState({})

  const fetchMovie = () => {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      setMovies(res.data)
    }).catch((err) => console.log(err))
  }

  useEffect(fetchMovie, [])

  return (
    <div className="container pt-100 pb-5">
      <div className="row">
        <div className="col-12">
          <div className="card-detail d-flex">
            <div className="card-img">
              <img className='detailImg' src={movies.image} alt="" />
            </div>
            <div className="card-text">
              <h1>{movies.title}</h1><p>{movies.release_year}</p>
              <h4>GENRE: {movies.genre} <br />
                DIRECTOR: {movies.director}</h4>
              <p>{movies.abstract}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
