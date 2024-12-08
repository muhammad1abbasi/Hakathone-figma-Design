import Image from 'next/image'

import React from 'react'

const Latestproj = () => {
  return (
    <div className='container mx-auto my-10'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[42px] text-blue-900'>Leatest Products</h1>
            <div className='flex space-x-8 my-3'>
                <p className='text-pink-500 text-[18px]'>New Arrival</p>
                <p className='text-[18px]'>New Arrival</p>
                <p className='text-[18px]'>Featured</p>
                <p className='text-[18px]'>Special Offer</p>

            </div>

        </div>


        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center space-x-5 space-y-5'>
            <div className='flex flex-col justify-center items-center'>
            <div className='bg-slate-100 w-[360px] h-[269.96px] flex justify-center items-center'>
            <Image src="/images/Div1.svg" alt='img' width={233} height={233}/>
            </div>
            <div className='flex justify-between items-center space-x-28'>
               <div className='flex'>
               <h1 className='text-blue-900'>Comfort Handy Craft</h1>
               </div>

                <div className='flex space-x-3'>
                    <p className='text-blue-900'>$42.00</p>
                    <p className='text-pink-500'>$65.00</p>
                </div>

            </div>

            </div>

            <div className='flex flex-col justify-center items-center'>
            <div className='bg-slate-100 w-[360px] h-[269.96px] flex justify-center items-center'>
            <Image src="/images/Div2.svg" alt='img' width={233} height={233}/>
            </div>
            <div className='flex justify-between items-center space-x-28'>
               <div className='flex'>
               <h1 className='text-blue-900'>Comfort Handy Craft</h1>
               </div>

                <div className='flex space-x-3'>
                    <p className='text-blue-900'>$42.00</p>
                    <p className='text-pink-500'>$65.00</p>
                </div>

            </div>

            </div>

            <div className='flex flex-col justify-center items-center'>
            <div className='bg-slate-100 w-[360px] h-[269.96px] flex justify-center items-center'>
            <Image src="/images/div1chair.svg" alt='img' width={233} height={233}/>
            </div>
            <div className='flex justify-between items-center space-x-28'>
               <div className='flex'>
               <h1 className='text-blue-900'>Comfort Handy Craft</h1>
               </div>

                <div className='flex space-x-3'>
                    <p className='text-blue-900'>$42.00</p>
                    <p className='text-pink-500'>$65.00</p>
                </div>

            </div>

            </div>


            <div className='flex flex-col justify-center items-center'>
            <div className='bg-slate-100 w-[360px] h-[269.96px] flex justify-center items-center'>
            <Image src="/images/Div4.svg" alt='img' width={233} height={233}/>
            </div>
            <div className='flex justify-between items-center space-x-28'>
               <div className='flex'>
               <h1 className='text-blue-900'>Comfort Handy Craft</h1>
               </div>

                <div className='flex space-x-3'>
                    <p className='text-blue-900'>$42.00</p>
                    <p className='text-pink-500'>$65.00</p>
                </div>

            </div>

            </div>

            <div className='flex flex-col justify-center items-center'>
            <div className='bg-slate-100 w-[360px] h-[269.96px] flex justify-center items-center'>
            <Image src="/images/Div5.svg" alt='img' width={233} height={233}/>
            </div>
            <div className='flex justify-between items-center space-x-28'>
               <div className='flex'>
               <h1 className='text-blue-900'>Comfort Handy Craft</h1>
               </div>

                <div className='flex space-x-3'>
                    <p className='text-blue-900'>$42.00</p>
                    <p className='text-pink-500'>$65.00</p>
                </div>

            </div>

            </div>


            <div className='flex flex-col justify-center items-center'>
            <div className='bg-slate-100 w-[360px] h-[269.96px] flex justify-center items-center'>
            <Image src="/images/div4chair.svg" alt='img' width={233} height={233}/>
            </div>
            <div className='flex justify-between items-center space-x-28'>
               <div className='flex'>
               <h1 className='text-blue-900'>Comfort Handy Craft</h1>
               </div>

                <div className='flex space-x-3'>
                    <p className='text-blue-900'>$42.00</p>
                    <p className='text-pink-500'>$65.00</p>
                </div>

            </div>

            </div>


        </div>
      
    </div>
  )
}

export default Latestproj
