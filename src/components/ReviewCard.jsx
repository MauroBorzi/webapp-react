

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <h3>{review.name}</h3>
      <p>{review.vote}</p>
      <p>{review.text}</p>
    </div>
  )
}

export default ReviewCard
