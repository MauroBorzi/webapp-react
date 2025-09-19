import DefoultLayout from "./layout/DefoultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DetailPage from "./pages/DetailPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefoultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
