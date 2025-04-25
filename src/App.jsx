import { Routes, Route } from 'react-router-dom'
import RealEstate from './Pages/RealEstate'
import Home from './Pages/Home'
import Entertainment from './Pages/Entertainment'
import Influencers from './Pages/Influencers'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/real-estate" element={<RealEstate />} />
      <Route path="/entertainment" element={<Entertainment />} />
      <Route path="/influencers" element={<Influencers />} />
    </Routes>
  )
}

export default App