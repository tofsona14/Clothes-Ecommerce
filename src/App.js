import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './components/toAdd/index.css'
import {FirstOfProfile, SecondOfProfile, ThirdOfProfile, ZeroOfProfile} from './components/profile-page/profileStTogether'
import './components/profile-page/profile.css'
import Home from './components/each-page-full/home'
import Male from './components/each-page-full/male'
import Moa from './app2';

function App() {
  return (
        <Moa />
    )
}

export default App;
