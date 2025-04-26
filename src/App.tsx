
import { Route, Routes } from 'react-router'
import './App.css'
import LoginI from './pages/LoginI'
import Personal from './components/SignUpActive/Personal_old'
import PInfo from './components/SignUpActive/PersonalInfo'
import ProfessionalInfo from './components/SignUpActive/ProfessionalInfo'

function App() {
  return (
    <Routes>
      <Route path='/login2' element={<LoginI />} />
      <Route path='/personal' element={<Personal />} />
      <Route path='/pinfo' element={<PInfo />} />
      <Route path='/professionalinfo' element={<ProfessionalInfo />} />
    </Routes>
  )
}

export default App
