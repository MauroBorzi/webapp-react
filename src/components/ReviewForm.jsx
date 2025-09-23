import axios from "axios"
import { useState } from "react"


const ReviewForm = ({ movieId, reloadReviews }) => {

  const [formData, setFormData] = useState({
    name: "",
    vote: "",
    text: "",
  })

  const setFieldValue = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:3000/movies/${movieId}/reviews`, formData, { headers: { "Content-Type": "application/json" } }).then((resp) => {
      setFormData({
        name: "",
        vote: "",
        text: "",
      })
      reloadReviews()
    })
  }

  return (
    <div className="detail-card">
      <h2 className='text-center my-5'><strong>LEAVE A REVIEW</strong></h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label"><strong>NAME</strong></label>
          <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={formData.name} onChange={setFieldValue} />
        </div>
        <div className="mb-3">
          <label className="form-label"><strong>VOTE</strong></label>
          <input type="number" min="0" max="5" className="form-control" id="vote" name="vote" placeholder="Vote" value={formData.vote} onChange={setFieldValue} />
        </div>
        <div className="mb-3">
          <label className="form-label"><strong>REVIEW</strong></label>
          <textarea className="form-control" id="text" name="text" placeholder='Insert review' rows="3" value={formData.text} onChange={setFieldValue}></textarea>
        </div>
        <button onClick={handleSubmit} className="btn btn-yellow">CREATE</button>
      </form>
    </div>
  )
}

export default ReviewForm
