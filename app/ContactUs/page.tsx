import Headerone from '@/components/headerone';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactHead from '@/components/ContactUs/ContactHead';
import ContactUsHero from '@/components/ContactUs/ContactUsHero';

import React from 'react'

const GridDef = () => {
  return (
    <div className='font-josifin'>
        <Headerone></Headerone>
        <Header></Header>
        <ContactHead></ContactHead>
        <ContactUsHero></ContactUsHero>
  
        <Footer></Footer>
        
        
      
    </div>
  )
}

export default GridDef ;

