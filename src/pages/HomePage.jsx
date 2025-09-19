import React from 'react'

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className='text-center py-4'>
            <h1>BOOLBUSTER</h1>
            <h5>La libreria di film più grande al mondo!</h5>
          </div>
        </div>
      </div>
      <div className="row gy-3">
        <div className="col-12 col-md-6 col-lg-4 pt-4">
          <div className="card-movie">
            <img className='cover-movie' src="./lotr.png" alt="" />
            <div className="overlay">
              <h2>titolo anno</h2>
              <h4>diretto</h4>
              <p>descrizione</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
