import React from 'react'
import MainHeroSection from './components/MainHeroSection'
import SignupSignin from './components/LoginPage/SignupSigin'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AppointmentSection from './components/userFile/Appointment/AppointmentSection'
import Dashboard from './components/userFile/Dashbord/Dashboard'
import UserProfile from './components/userFile/userProfile/UserProfile'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainHeroSection />} />
      <Route path='SingupSigningPage' element={<SignupSignin />} />


      <Route path='/app' element={<Layout />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='appointment' element={<AppointmentSection />} />
        <Route path='userProfile'element={<UserProfile/>} />
      </Route>

    </Routes>
  )
}

export default App
