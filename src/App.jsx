import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage'
import MainPage from './Pages/MainPage'

function App() {

  return (
    <Router >
      <Routes>
        <Route path='/pokemondex' element={<MainPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
