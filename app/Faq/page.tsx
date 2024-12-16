import Headerone from '@/components/headerone';
import Header from '@/components/header';
import Footer from '@/components/footer';
import FaqHead from '@/components/Faq/faqhead';
import Faqhero from '@/components/Faq/faqhero';

import React from 'react'

const GridDef = () => {
  return (
    <div className='font-josifin'>
        <Headerone></Headerone>
        <Header></Header>
        <FaqHead></FaqHead>
        <Faqhero></Faqhero>

        <Footer></Footer>
        
        
      
    </div>
  )
}

export default GridDef ;

