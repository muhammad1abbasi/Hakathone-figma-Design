import Headerone from '@/components/headerone';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Shopylist from '@/components/shoplist/shopylist';
import Gridprod from '@/components/shoplist/gridprod';

import React from 'react'

const GridDef = () => {
  return (
    <div className='font-josifin'>
        <Headerone></Headerone>
        <Header></Header>
        <Shopylist></Shopylist>
        <Gridprod></Gridprod>
        <Footer></Footer>
        
        
      
    </div>
  )
}

export default GridDef ;