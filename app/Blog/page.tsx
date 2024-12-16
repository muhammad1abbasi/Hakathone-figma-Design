import Headerone from '@/components/headerone';
import Header from '@/components/header';
import Footer from '@/components/footer';
import BlogsHead from '@/components/Blogs/BlogsHead';
import BlogsHero from '@/components/Blogs/BlogsHero';

import React from 'react'

const GridDef = () => {
  return (
    <div className='font-josifin'>
        <Headerone></Headerone>
        <Header></Header>
        <BlogsHead></BlogsHead>
        <BlogsHero></BlogsHero>
        <Footer></Footer>
        
        
      
    </div>
  )
}

export default GridDef ;

