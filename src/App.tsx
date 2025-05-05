
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/LoginI'
import PInfo from './components/SignUpActive/PersonalInfo'
import AllLeads from './pages/dashboard/AllLeads'
import Attendance from './pages/dashboard/Attendance'
import Holidays from '/home/user/CREM-HRM/src/pages/dashboard/Holiday.tsx'
import Settings from './pages/dashboard/Settings'
import AllEmployees from './pages/dashboard/AllEmployees'
import ProfessionalInfo from './components/SignUpActive/ProfessionalInfo'
import SocialProfile from './components/SignUpActive/SocialProfile'
import Contact from './components/SignUpActive/Contact'
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Navigate to="/login2" />} />
      <Route path='/login2' element={<LoginPage />} />
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
      <Route path='/settings' element={<Settings />} />
    </Routes>
  )
    
}

export default App
