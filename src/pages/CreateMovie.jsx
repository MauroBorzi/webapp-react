import React from 'react'

const CreateMovie = () => {
  return (
    <div className="container pt-100">
      <div className="row">
        <div className="col-12">
          <h2 className='text-center my-5'><strong>NEW FILM</strong></h2>
        </div>
      </div>
      <form>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mb-3">
              <label className="form-label"><strong>TITLE</strong></label>
              <input type="text" className="form-control" id="title" name="title" placeholder="Title" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mb-3">
              <label className="form-label"><strong>DIRECTOR</strong></label>
              <input type="text" className="form-control" id="director" name="director" placeholder="Director" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mb-3">
              <label className="form-label"><strong>GENRE</strong></label>
              <input type="text" className="form-control" id="genre" name="genre" placeholder="Genre" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label"><strong>RELEASE YEAR</strong></label>
              <input type="number" className="form-control" id="release_year" name="release_year" placeholder="Release year" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div class="mb-3">
              <label class="form-label"><strong>IMAGE</strong></label>
              <input class="form-control" type="file" id="image" name='image' placeholder='upload image' />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label className="form-label"><strong>ABSTRACT</strong></label>
              <textarea className="form-control" id="abstract" name="abstract" placeholder='Insert abstract' rows="3"></textarea>
            </div>
          </div>
          <div className="col-12 text-center mt-3">
            <button className="btn btn-yellow px-5">CREATE</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateMovie
