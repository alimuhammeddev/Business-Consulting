import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RealEstate from './Pages/RealEstate'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/real-estate" element={<RealEstate />} />
    </Routes>
  )
}

export default App