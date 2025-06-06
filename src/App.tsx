
import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import SignUpPage from './pages/SignUp'
import PInfo from './components/SignUpActive/PersonalInfo'
import ProfessionalInfo from './components/SignUpActive/ProfessionalInfo'
import SocialProfile from './components/SignUpActive/SocialProfile'
import Contact from './components/SignUpActive/Contact'
import Dashboard from './pages/dashboard/Dashboard'
import Messenger from './pages/dashboard/Messenger';
import Leaves from './pages/dashboard/Leaves';
import AllEmployees from './pages/dashboard/AllEmployees'
import AllLeads from './pages/dashboard/AllLeads'
import Attendance from './pages/dashboard/Attendance'
import Holidays from './pages/dashboard/Holiday'
import Settings from './pages/dashboard/Settings'
import SignInPage from './pages/SignIn'
import { useRecoilValue } from 'recoil'
import { loggedin } from './data/atom'

function App() {

  return (

    <Routes>
      <Route path='/' element={<Navigate to="/signup" />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/signin' element={<SignInPage />} />
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
