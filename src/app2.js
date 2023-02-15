import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './components/toAdd/index.css'
import {FirstOfProfile, SecondOfProfile, ThirdOfProfile, ZeroOfProfile} from './components/profile-page/profileStTogether'
import './components/profile-page/profile.css'
import Home from './components/each-page-full/home'
import Male from './components/each-page-full/male'
import Female from './components/each-page-full/female';
import NewCol from './components/each-page-full/newCol';

const Moa = () => {
    return(
        <div>
            <Router>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Male' element={<Male />}/>
          <Route path='/Profile' element={<ZeroOfProfile />}/>
          <Route path="/Profile-info" element={<FirstOfProfile />} />
          <Route path="/Profile-pass" element={<SecondOfProfile />} />
          <Route path="/Profile-num" element={<ThirdOfProfile />} />
          <Route path='/Female' element={<Female />}/>
          <Route path='/collection' element={<NewCol />} />

          </Routes>
        </Router>
        
        </div>
    )
}

export default Moa;
