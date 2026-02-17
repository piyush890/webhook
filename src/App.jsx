import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Payment from './Reports/Payment'
import Technicallogs from './Events/Events'
import Alert from './WebhookDashboard/Alert'
import AuthPage from './Auth/AuthPage'
import CreateProject from './CreateProject/CreateProject'
import PayeoxLanding from './WebhookDashboard/payhook-landing'
import Projects from './Projects/Projects'
import PrivacyPolicy from './WebhookDashboard/privacy-policy'
import TermsAndConditions from './WebhookDashboard/terms-and-conditions'
import About from './WebhookDashboard/payeox-about'
import Contact from './WebhookDashboard/payeox-contact'
import SecurityPage from './WebhookDashboard/payeoxSecurity'
import PayeoxDashboard from './WebhookDashboard/Overview'
import { useDispatch, useSelector } from 'react-redux'
import ProtectedRoute from './Helper/ProtectedRoutes'
import Events from './Events/Events'
import { setLoginSuccess } from './Redux/Auth/AuthReducer'
import { checkAuth } from './Helper/helper'
import Refund from './Reports/Refund'





function App() {
  const { isAuthenticated } = useSelector(
    (state) => state.LoggedIn
  );
  const dispatch = useDispatch();
  useEffect(()=>{
   try {
    const checkData = checkAuth();
    if(checkData && checkData.isAuthenticated){
      dispatch(setLoginSuccess(checkData));
    }
    else{
      dispatch(setLoginSuccess({
        isAuthenticated: false,
        user: null,
        type: null,
        name: null,
        email: null,
      }));
    }
    
   } catch (error) {
    console.error("Error during auth check:", error);
   }
   console.log(isAuthenticated);
   
  },[])
  return (
    <>
     <BrowserRouter>
      <Routes>
        
        <Route path='/' element ={<PayeoxLanding/>}/>
        <Route path="*" element={<Navigate to="/notfound" replace />} />
        <Route path='/reports/payments' element ={
          <ProtectedRoute>
            <Payment/>
          </ProtectedRoute>
          }/>
        <Route path='/reports/refunds' element ={
          <ProtectedRoute>
            <Refund/>
          </ProtectedRoute>
          }/>
         <Route path='/dashboard' element ={
            <PayeoxDashboard/>
         }/>
         <Route path='/projects' element ={
          <Projects/>
          }/>
         <Route path='/technicalLogs' element ={<Technicallogs/>}/>
         <Route path='/alerts' element ={<Alert/>}/>
         <Route path='/auth' element ={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <AuthPage/>
          }/>
         <Route path='/createProject' element ={
          <ProtectedRoute>
            <CreateProject/>
          </ProtectedRoute>
          }/>
         <Route path='/events' element ={
          <ProtectedRoute>
            <Events/>
          </ProtectedRoute>
          }/>
         <Route path='/privacyPolicy' element ={<PrivacyPolicy/>}/>
         <Route path='/termsAndConditions' element ={<TermsAndConditions/>}/>
         <Route path='/about' element ={<About/>}/>
         <Route path='/contact' element ={<Contact/>}/>
         <Route path='/security' element ={<SecurityPage/>}/>

    </Routes>
         </BrowserRouter>
    </>
  )
}

export default App
