import React from 'react'
import MainHeroSection from './components/MainHeroSection'
import SignupSignin from './components/LoginPage/SignupSigin'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AppointmentSection from './components/userFile/Appointment/AppointmentSection'
import Dashboard from './components/userFile/Dashbord/Dashboard'
import UserProfile from './components/userFile/userProfile/UserProfile'
import ResourceHub from './components/userFile/ResourceHub/ResourceHub'
import Multipage from './components/Multipage'
import AnxietyPage from './condition-Addressed/AnxietyPage'
import DepressionPage from '../src/condition-Addressed/DepressionPage'
import InfoPage from '../src/condition-Addressed/InfoPage'
import LearningDiscorders from '../src/condition-Addressed/LearningDisorders'
import MotivationProblems from "../src/condition-Addressed/MotivationProblems"
import FeedbackForm from './ForClients/FeedbackForm'
import NotFound from './components/pages/NotFound'





const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainHeroSection />} />
      <Route path='/multipage' element={<Multipage />} >
       <Route path='/multipage/anxiety' element={<AnxietyPage/>} />
       <Route path='/multipage/depression' element={<DepressionPage/>} />
       <Route path='/multipage/infoPage' element={<InfoPage/>} />
       <Route path='/multipage/learningpage' element={<LearningDiscorders/>} />
       <Route path='/multipage/motivation' element={<MotivationProblems/>} />
       <Route path='/multipage/feedback' element={<FeedbackForm/>}/>
       <Route path='/multipage/notfound' element={<NotFound/>} />

      </Route>
      <Route path='SingupSigningPage' element={<SignupSignin />} />


      <Route path='/app' element={<Layout />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='appointment' element={<AppointmentSection />} />
        <Route path='userProfile' element={<UserProfile />} />
        <Route path='resourcehub' element={<ResourceHub />} />
      </Route>

    </Routes >
  )
}

export default App
