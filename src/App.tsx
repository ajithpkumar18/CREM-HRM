
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
import { RecoilRoot } from 'recoil'
import { RedirectIfLoggedIn, RequireAuth } from './components/ProtectionWarppers/Auth'
import Sidebar from './components/ui/Sidebar/Sidebar'
import Navbar from './components/ui/Navbar'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'

function App() {

  return (
    <RecoilRoot>

      <Routes>
        <Route path='/' element={<Navigate to="/signin" />} />

        <Route path='/signin' element={<RedirectIfLoggedIn>
          <SignInPage />
        </RedirectIfLoggedIn>
        }
        />

        <Route path='/signup' element={<RedirectIfLoggedIn>
          <SignUpPage />
        </RedirectIfLoggedIn>
        } />

        <Route element={<Layout />}>
          <Route path='/personal' element={
            // <RequireAuth>
            <PInfo />
            // </RequireAuth>
          } />
          <Route path='/professionalinfo' element={
            // <RequireAuth>
            <ProfessionalInfo />
            // </RequireAuth>
          } />
          <Route path='/Social' element={
            // <RequireAuth>
            <SocialProfile />
            // </RequireAuth>
          } />
          <Route path='/Contact' element={
            // <RequireAuth>
            <Contact />
            // </RequireAuth>
          } />
          <Route path='/dashboard' element={
            // <RequireAuth>
            <Dashboard />
            // </RequireAuth>
          } />
          <Route path='/employees' element={
            // <RequireAuth>
            <AllEmployees />
            // </RequireAuth>
          } />
          <Route path='/leads' element={
            // <RequireAuth>
            <AllLeads />
            // </RequireAuth>
          } />
          <Route path='/attendance' element={
            // <RequireAuth>
            <Attendance />
            // </RequireAuth>
          } />
          <Route path='/holidays' element={
            // <RequireAuth>
            <Holidays />
            // </RequireAuth>
          } />
          <Route path='/setting' element={
            // <RequireAuth>
            <Settings />
            // </RequireAuth>
          } />
          <Route path='/messenger' element={
            // <RequireAuth>
            <Messenger />
            // </RequireAuth>
          } />
          <Route path='/leaves' element={
            // <RequireAuth>
            <Leaves />
            // </RequireAuth>
          } />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </RecoilRoot>
  )
}

export default App
