import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className='h-100 d-flex flex-column align-items-center justify-content-center pt-100'>
      <h2>Pagina non trovata</h2>
      <p className='my-3'>Ci dispaice ma la pagina cercata non esiste</p>
      <Link className="btn btn-yellow" to="/"><i className="fa-solid fa-house"></i></Link>
    </div>
  )
}

export default NotFoundPage
