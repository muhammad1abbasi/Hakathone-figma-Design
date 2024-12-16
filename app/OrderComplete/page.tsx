import Headerone from '@/components/headerone';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Orderhead from '@/components/OrderComplete/Orderhead';
import Orderhero from '@/components/OrderComplete/Orderhero';


import React from 'react'



const LoginPage = () => {
  return (
    <div className='font-josifin'>
        <Headerone></Headerone>
        <Header></Header>
        <Orderhead></Orderhead>
        <Orderhero></Orderhero>
       
        
        <Footer></Footer>
        
        
      
    </div>
  )
}

export default LoginPage ;