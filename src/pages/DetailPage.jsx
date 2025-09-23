import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

import ReviewCard from "../components/ReviewCard"
import StarRating from "../components/StarRating"
import ReviewForm from "../components/ReviewForm"

const DetailPage = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const [movies, setMovies] = useState({})

  const fetchMovie = () => {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      setMovies(res.data)
    }).catch((err) => navigate('/not-found', { replace: true }))
  }

  useEffect(fetchMovie, [id, navigate])

  return (
    <div className="container pt-100 pb-5">
      <div className="row">
        <div className="col-12">
          <div className="card-detail d-flex">
            <div className="card-img">
              <img className='detailImg' src={movies.image} alt="" />
            </div>
            <div className="card-text">
              <div>
                <h1>{movies.title}</h1>
                <p>{movies.release_year}</p>
                <p>{movies.average_vote !== null ? <StarRating vote={movies.average_vote} /> : "The book has not received any reviews"}</p>
                <h4>GENRE: {movies.genre} <br />
                  DIRECTOR: {movies.director}</h4>
                <p>{movies.abstract}</p>
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-yellow" onClick={() => navigate(`/detail/${parseInt(id) - 1}`)} disabled={parseInt(id) === 1 ? true : false}>
                  <i className="fa-solid fa-caret-left"></i>
                </button>
                <Link className="btn btn-yellow" to="/"><i className="fa-solid fa-house"></i></Link>
                <button type="button" className="btn btn-yellow" onClick={() => navigate(`/detail/${parseInt(id) + 1}`)}>
                  <i className="fa-solid fa-caret-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="reviews">
            <ReviewForm movieId={id} />
            <h2 className="mt-5"><strong>REVIEWS:</strong></h2>
            {movies.reviews && movies.reviews.length > 0 ? movies.reviews.map(review => {
              return (
                <ReviewCard key={review.id} review={review} reloadReviews={fetchMovie} />
              )
            }) : <h2><em>There are no reviews for this film yet.</em></h2>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
