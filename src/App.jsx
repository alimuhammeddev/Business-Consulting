import { Routes, Route } from 'react-router-dom'
import RealEstate from './Pages/RealEstate'
import Home from './Pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/real-estate" element={<RealEstate />} />
    </Routes>
  )
}

export default App