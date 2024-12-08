import Headerone from '@/components/headerone';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Featuredprod from '@/components/featuredprod';
import Latestproj from '@/components/latestproj';
import Shopex from '@/components/shopex';
import Item from '@/components/item';
import Tranding from '@/components/tranding';
import Discount from '@/components/discount';
import Topcategoris from '@/components/topcategoris';
import Singleimg from '@/components/singleimg';
import Finalcardsec from '@/components/finalcardsec';
import Footer from '@/components/footer';

import React from 'react'

const HomePage = () => {
  return (
    <div className='font-josifin'>
      <Headerone></Headerone>
      <Header></Header>
      <Hero></Hero>
      <Featuredprod></Featuredprod>
      <Latestproj></Latestproj>
      <Shopex></Shopex>
      <Item></Item>
      <Tranding></Tranding>
      <Discount></Discount>
      <Topcategoris></Topcategoris>
      <Singleimg></Singleimg>
      <Finalcardsec></Finalcardsec>
      <Footer></Footer>
      
    </div>
  )
}

export default HomePage ;
