import StarRating from "./StarRating"

const ReviewCard = ({ review }) => {
  const { name, vote, text } = review
  return (
    <div className="review-card">
      <h3>{name}</h3>
      <p><StarRating vote={vote} /></p>
      <p>{text}</p>
    </div>
  )
}

export default ReviewCard
