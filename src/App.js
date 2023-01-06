import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './components/toAdd/index.css'
import {FirstOfProfile, SecondOfProfile, ThirdOfProfile, ZeroOfProfile} from './components/profile-page/profileStTogether'
import './components/profile-page/profile.css'
import Home from './components/each-page-full/home'
import Male from './components/each-page-full/male'

function App() {
  return (
        <Router>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Male />}/>
          <Route path='/Profile' element={<ZeroOfProfile />}/>
          <Route path="/Profile-info" element={<FirstOfProfile />} />
          <Route path="/Profile-pass" element={<SecondOfProfile />} />
          <Route path="/Profile-num" element={<ThirdOfProfile />} />
          </Routes>
        </Router>
    )
}

export default App;
