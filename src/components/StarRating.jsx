const StarRating = ({ vote }) => {
  return [1, 2, 3, 4, 5].map((num, i) => {
    if (i < vote) {
      return <i key={i} className='fa-solid fa-star'></i>
    }
    else {
      return <i key={i} className='fa-regular fa-star'></i>
    }

  })
}

export default StarRating
