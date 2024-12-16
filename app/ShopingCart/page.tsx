import Headerone from '@/components/headerone';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ShopingCartHead from '@/components/ShopingCart/shopingcartHead';
import ShopingCartHero from '@/components/ShopingCart/ShopingCartHero';



import React from 'react'

const GridDef = () => {
  return (
    <div className='font-josifin'>
        <Headerone></Headerone>
        <Header></Header>
        <ShopingCartHead></ShopingCartHead>
        <ShopingCartHero></ShopingCartHero>
        <Footer></Footer>
        
        
      
    </div>
  )
}

export default GridDef ;