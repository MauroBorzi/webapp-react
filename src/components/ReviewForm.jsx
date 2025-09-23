import React from 'react'

const ReviewForm = () => {
  return (

    <div className="detail-card">
      <h2 className='text-center my-5'><strong>LEAVE A REVIEW</strong></h2>
      <div className="mb-3">
        <label className="form-label"><strong>NAME</strong></label>
        <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
      </div>
      <div className="mb-3">
        <label className="form-label"><strong>VOTE</strong></label>
        <input type="number" min="0" max="5" className="form-control" id="vote" name="vote" placeholder="Vote" />
      </div>
      <div className="mb-3">
        <label className="form-label"><strong>REVIEW</strong></label>
        <textarea className="form-control" id="text" name="text" placeholder='Insert review' rows="3"></textarea>
      </div>
    </div>
  )
}

export default ReviewForm
