import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
  const { id, title, director, genre, release_year, abstract, image } = movie
  return (
    <div className="col-12 col-md-6 col-lg-4 pt-4">
      <Link to={`/detail/${id}`}>
        <div className="card-movie">
          <img className='cover-movie' src={image} alt={title} />
          <div className="overlay">
            <h2>{title}</h2><p>{release_year}</p>
            <h5>GENRE: {genre} <br />
              DIRECTOR: {director}</h5>
            <p>{abstract}</p>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default MovieCard
