import Headerone from '@/components/headerone';
import Header from '@/components/header';
import Footer from '@/components/footer';
import LoginHead from '@/components/Login/loginhead';


import React from 'react'
import LoginBar from '@/components/Login/LoginBar';


const LoginPage = () => {
  return (
    <div className='font-josifin'>
        <Headerone></Headerone>
        <Header></Header>
        <LoginHead></LoginHead>
        <LoginBar></LoginBar>
        
        <Footer></Footer>
        
        
      
    </div>
  )
}

export default LoginPage ;