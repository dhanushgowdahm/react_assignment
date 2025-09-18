import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/loginPage/login.jsx'
import HomePage from './pages/homePage/homePage.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App