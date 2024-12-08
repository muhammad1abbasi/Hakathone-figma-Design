import Image from 'next/image'

import React from 'react'

const Tranding = () => {
  return (
    <div className='container mx-auto my-7 max-w-full'>
        <div className='flex justify-center items-center'>
            <h1 className='text-blue-900 text-[42px]'>Trending Products</h1>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center my-16 space-y-5' >
            <div className='bg-white w-[270px] h-[350px] flex flex-col shadow-lg   '>
                <div className='flex bg-gray-100 w-[247px] h-[244px] justify-center items-center'>
                    <Image src="images/grayone.svg" alt='img' width={171} height={171}/>

                </div>

                <div className='flex flex-col items-center my-7 space-y-2'>
                    <h1 className='text-blue-900 text-[16px]'>Cantilever chair</h1>
                    <div className='flex space-x-4 '>
                    <p className='text-blue-900 text-[14px]'>$26.00 </p>
                    <p className='text-[12px] text-slate-400'>$42.00</p>
                    </div>

                </div>

            </div>

            <div className='bg-white w-[270px] h-[350px] flex flex-col shadow-lg  '>
                <div className='flex bg-gray-100 w-[247px] h-[244px] justify-center items-center'>
                    <Image src="images/redone.svg" alt='img' width={171} height={171}/>

                </div>

                <div className='flex flex-col items-center my-7 space-y-2'>
                    <h1 className='text-blue-900 text-[16px]'>Cantilever chair</h1>
                    <div className='flex space-x-4 '>
                    <p className='text-blue-900 text-[14px]'>$26.00 </p>
                    <p className='text-[12px] text-slate-400'>$42.00</p>
                    </div>

                </div>

            </div>

            <div className='bg-white w-[270px] h-[350px] flex flex-col shadow-lg  '>
                <div className='flex bg-gray-100 w-[247px] h-[244px] justify-center items-center'>
                    <Image src="images/roundwhite.svg" alt='img' width={171} height={171}/>

                </div>

                <div className='flex flex-col items-center my-7 space-y-2'>
                    <h1 className='text-blue-900 text-[16px]'>Cantilever chair</h1>
                    <div className='flex space-x-4 '>
                    <p className='text-blue-900 text-[14px]'>$26.00 </p>
                    <p className='text-[12px] text-slate-400'>$42.00</p>
                    </div>

                </div>

            </div>

            <div className='bg-white w-[270px] h-[350px] flex flex-col shadow-lg  '>
                <div className='flex bg-gray-100 w-[247px] h-[244px] justify-center items-center'>
                    <Image src="images/chapryseat.svg" alt='img' width={171} height={171}/>

                </div>

                <div className='flex flex-col items-center my-7 space-y-2'>
                    <h1 className='text-blue-900 text-[16px]'>Cantilever chair</h1>
                    <div className='flex space-x-4 '>
                    <p className='text-blue-900 text-[14px]'>$26.00 </p>
                    <p className='text-[12px] text-slate-400'>$42.00</p>
                    </div>

                </div>

            </div>

        </div>

        <div className='flex flex-col sm:flex-row justify-evenly item-center'>
            <div className='flex flex-col bg-pink-100 sm:w-[420px] sm:h-[270px] p-3'>
                <h1 className='text-[26px] text-blue-900'>23% off in all products</h1>
                <p className='text-pink-500 text-[16px]'>Shop Now</p>

                <div className='ml-44'>
                    <Image src="/images/blackclock.svg" alt='img' width={213} height={207}/>
                </div>

            </div>

            <div className='flex flex-col bg-gray-100 sm:w-[420px] sm:h-[270px] p-3'>
                <h1 className='text-[26px] text-blue-900'>23% off in all products</h1>
                <p className='text-pink-500 text-[16px]'>Shop Now</p>

                <div className=''>
                    <Image src="/images/cabinate.svg" alt='img' width={312} height={173} className='sm:ml-24 sm:mt-7'/>
                </div>

            </div>

            <div className='flex flex-col  bg-white w-[420px] h-[270px] p-3 space-y-5 '>
                <div className='flex space-x-3 items-center'>
                    <div className='bg-gray-100 w-[107px] h-[74px] flex justify-center items-center'>
                        <Image src="/images/darkbrown.svg" alt='img' width={64} height={71}/>

                    </div>

                    <div className='flex flex-col '>
                        <h1 className='text-blue-900 text-[16px]'>Executive Seat chair</h1>
                        <p className='text-blue-900 text-[12px]'>$32.00</p>

                    </div>

                </div>

                <div className='flex space-x-3 items-center'>
                    <div className='bg-gray-100 w-[107px] h-[74px] flex justify-center items-center'>
                        <Image src="/images/foambrown.svg" alt='img' width={64} height={71}/>

                    </div>

                    <div className='flex flex-col '>
                        <h1 className='text-blue-900 text-[16px]'>Executive Seat chair</h1>
                        <p className='text-blue-900 text-[12px]'>$32.00</p>

                    </div>

                </div>

                <div className='flex space-x-3 items-center '>
                    <div className='bg-gray-100 w-[107px] h-[74px] flex justify-center items-center'>
                        <Image src="/images/brownish.svg" alt='img' width={64} height={71}/>

                    </div>

                    <div className='flex flex-col '>
                        <h1 className='text-blue-900 text-[16px]'>Executive Seat chair</h1>
                        <p className='text-blue-900 text-[12px]'>$32.00</p>

                    </div>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Tranding
