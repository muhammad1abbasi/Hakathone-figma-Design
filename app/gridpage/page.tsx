import Headerone from '@/components/headerone';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Shop from '@/components/griddef/shop';
import Itemsgrid from '@/components/griddef/itemsgrid';

import React from 'react'

const GridDef = () => {
  return (
    <div className='font-josifin'>
        <Headerone></Headerone>
        <Header></Header>
        <Shop></Shop>
        <Itemsgrid></Itemsgrid>
        <Footer></Footer>
        
        
      
    </div>
  )
}

export default GridDef ;
