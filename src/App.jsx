import './App.scss'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import DayDetailPage from './pages/DayDetailPage/DayDetailPage';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/day/:dayId" element={<DayDetailPage/>} />
    </Routes>
  
    </BrowserRouter>
    
    </>
  )
}

export default App
