import Image from 'next/image'

import React from 'react'

const Topcategoris = () => {
  return (
    <div className='container mx-auto my-10'>
        <div className='flex justify-center items-center'>
        <h1 className='text-[42px] text-blue-900'>Top Categories</h1>
        </div>

        <div className='flex flex-col lg:flex-row space-y-5 justify-evenly items-center my-10'>
           <div className='flex flex-col items-center space-y-5'>
             <div className='bg-slate-100 rounded-full w-[269px] h-[269px] flex justify-center items-center'>
                <div className='flex justify-center items-center'>
                <Image src="/images/gents.svg" alt='img' width={178} height={178}/>

                </div>
               </div>

               <div className='flex flex-col items-center space-y-3'>
                <h1 className='text-blue-900 text-[20px]'>Mini LCW Chair</h1>
                <p className='text-blue-900 text-[16px]'>$56.00</p>

               </div>

               
           </div>

           <div className='flex flex-col items-center space-y-5'>
             <div className='bg-slate-100 rounded-full w-[269px] h-[269px] flex justify-center items-center'>
                <div className='flex justify-center items-center'>
                <Image src="/images/div1chair.svg" alt='img' width={178} height={178}/>

                </div>
               </div>

               <div className='flex flex-col items-center space-y-3'>
                <h1 className='text-blue-900 text-[20px]'>Mini LCW Chair</h1>
                <p className='text-blue-900 text-[16px]'>$56.00</p>

               </div>

               
           </div>

           <div className='flex flex-col items-center space-y-5'>
             <div className='bg-slate-100 rounded-full w-[269px] h-[269px] flex justify-center items-center'>
                <div className='flex justify-center items-center'>
                <Image src="/images/ladiessofa.svg" alt='img' width={178} height={178}/>

                </div>
               </div>

               <div className='flex flex-col items-center space-y-3'>
                <h1 className='text-blue-900 text-[20px]'>Mini LCW Chair</h1>
                <p className='text-blue-900 text-[16px]'>$56.00</p>

               </div>

               
           </div>

           <div className='flex flex-col items-center space-y-5'>
             <div className='bg-slate-100 rounded-full w-[269px] h-[269px] flex justify-center items-center'>
                <div className='flex justify-center items-center'>
                <Image src="/images/gents.svg" alt='img' width={178} height={178}/>

                </div>
               </div>

               <div className='flex flex-col items-center space-y-3'>
                <h1 className='text-blue-900 text-[20px]'>Mini LCW Chair</h1>
                <p className='text-blue-900 text-[16px]'>$56.00</p>

               </div>

               
           </div>

        </div>
    </div>
  )
}

export default Topcategoris
