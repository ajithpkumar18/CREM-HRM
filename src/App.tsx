
import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import { SignUpPage } from './pages/SignUp'
//import LoginI from './pages/LoginI'
import Dashboard from './pages/dashboard/Dashboard';
import AllEmployees from './pages/dashboard/AllEmployees';
import AllLeads from './pages/dashboard/AllLeads';
import Attendance from './pages/dashboard/Attendance';
import Settings from './pages/dashboard/Settings';
import Holidays from './pages/dashboard/Holiday';

import PInfo from './components/SignUpActive/PersonalInfo'
import ProfessionalInfo from './components/SignUpActive/ProfessionalInfo'
import SocialProfile from './components/SignUpActive/SocialProfile'
import Contact from './components/SignUpActive/Contact'
import Messenger from './pages/dashboard/Messenger';
import Leaves from './pages/dashboard/Leaves';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Navigate to="/signup" />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/personal' element={<PInfo />} />
      <Route path='/pinfo' element={<PInfo />} />
      <Route path='/professionalinfo' element={<ProfessionalInfo />} />
      <Route path='/Social' element={<SocialProfile />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/employees' element={<AllEmployees />} />
      <Route path='/leads' element={<AllLeads />} />
      <Route path='/attendance' element={<Attendance />} />
      <Route path='/holidays' element={<Holidays />} />
      <Route path='/setting' element={<Settings />} />
      <Route path='/messenger' element={<Messenger />} />
      <Route path='/leaves' element={<Leaves />} />
    </Routes>
  )
    
}

export default App
