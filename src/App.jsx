import './App.scss'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    {/* <Route path="/home" element={<Navigate to="/" />} /> */}
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
