import Header from "../components/Header"
import { Outlet } from "react-router-dom"

const DefoultLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default DefoultLayout
