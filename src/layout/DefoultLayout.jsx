import Header from "../components/Header"
import { Outlet } from "react-router-dom"

const DefoultLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DefoultLayout
