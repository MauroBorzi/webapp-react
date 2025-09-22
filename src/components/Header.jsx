import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img className="logo" src="./logo.png" alt="" />
              </div>
              <div>
                <Link className="btn btn-blu" to="/"><i className="fa-solid fa-house"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
