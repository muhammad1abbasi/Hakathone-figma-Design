
import Headerone from '@/components/headerone';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProductDetails from '@/components/productdetail/producthead';
import ProductGrid from '@/components/productdetail/productGrid';



import React from 'react'

const GridDef = () => {
  return (
    <div className='font-josifin'>
        <Headerone></Headerone>
        <Header></Header>
       <ProductDetails></ProductDetails>
       <ProductGrid></ProductGrid>
        <Footer></Footer>
        
        
      
    </div>
  )
}

export default GridDef ;