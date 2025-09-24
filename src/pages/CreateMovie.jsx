import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const CreateMovie = () => {

  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    release_year: "",
    image: null,
    abstract: "",
  })

  const navigate = useNavigate()

  const setFieldValue = (e) => {
    const { name, value } = e.target

    if (name === "image")
      setFormData({ ...formData, image: e.target.files[0] })
    else setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(`http://localhost:3000/movies`, formData, {
      headers: { "Content-type": "multipart/form-data" }
    }).then((resp) => {
      console.log("Libro inserito")
      navigate("/")
    })
  }

  return (
    <div className="container pt-100">
      <div className="row">
        <div className="col-12">
          <h2 className='text-center my-5'><strong>NEW FILM</strong></h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mb-3">
              <label className="form-label"><strong>TITLE</strong></label>
              <input type="text" className="form-control" id="title" name="title" placeholder="Title" value={formData.title} onChange={setFieldValue} required />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mb-3">
              <label className="form-label"><strong>DIRECTOR</strong></label>
              <input type="text" className="form-control" id="director" name="director" placeholder="Director" value={formData.director} onChange={setFieldValue} required />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mb-3">
              <label className="form-label"><strong>GENRE</strong></label>
              <input type="text" className="form-control" id="genre" name="genre" placeholder="Genre" value={formData.genre} onChange={setFieldValue} required />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label"><strong>RELEASE YEAR</strong></label>
              <input type="number" className="form-control" id="release_year" name="release_year" placeholder="Release year" value={formData.release_year} onChange={setFieldValue} required />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label"><strong>IMAGE</strong></label>
              <input className="form-control" type="file" id="image" name='image' placeholder='upload image' onChange={setFieldValue} required />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label className="form-label"><strong>ABSTRACT</strong></label>
              <textarea className="form-control" id="abstract" name="abstract" placeholder='Insert abstract' rows="3" value={formData.abstract} onChange={setFieldValue} required></textarea>
            </div>
          </div>
          <div className="col-12 text-center my-3">
            <button className="btn btn-yellow px-5" onClick={handleSubmit}>CREATE</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateMovie
