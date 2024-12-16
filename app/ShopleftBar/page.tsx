import Headerone from '@/components/headerone';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ShopleftHead from '@/components/ShopLeftSide/shopLeftsideHead';
import ShopLeftHero from '@/components/ShopLeftSide/shopLeftHero';


import React from 'react'



const LoginPage = () => {
  return (
    <div className='font-josifin'>
        <Headerone></Headerone>
        <Header></Header>
        <ShopleftHead></ShopleftHead>
        <ShopLeftHero></ShopLeftHero>
       
       
        
        <Footer></Footer>
        
        
      
    </div>
  )
}

export default LoginPage ;