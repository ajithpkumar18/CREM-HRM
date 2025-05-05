
import { Route, Routes } from 'react-router'
import './App.css'
import LoginI from './pages/LoginI'

import PInfo from './components/SignUpActive/PersonalInfo'
import ProfessionalInfo from './components/SignUpActive/ProfessionalInfo'
import SocialProfile from './components/SignUpActive/SocialProfile'
import Contact from './components/SignUpActive/Contact'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <Routes>
      <Route path='/login2' element={<LoginI />} />
      <Route path='/personal' element={<PInfo />} />
      <Route path='/pinfo' element={<PInfo />} />
      <Route path='/professionalinfo' element={<ProfessionalInfo />} />
      <Route path='/Social' element={<SocialProfile />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
