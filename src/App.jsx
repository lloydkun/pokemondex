import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MainPage from './Pages/MainPage'

function App() {

  return (
    <Router >
      <Routes>
        <Route path='/pokemondex' element={<MainPage />} />
        <Route path='/pokemondex/:pokemon_name' element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App
