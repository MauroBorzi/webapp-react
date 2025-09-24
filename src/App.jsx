import DefoultLayout from "./layout/DefoultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import HomePage from "./pages/HomePage"
import DetailPage from "./pages/DetailPage"
import NotFoundPage from "./pages/NotFoundPage"
import CreateMovie from "./pages/CreateMovie"
import GlobalContext from "./contexts/globalContext"


function App() {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefoultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/detail/create" element={<CreateMovie />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
