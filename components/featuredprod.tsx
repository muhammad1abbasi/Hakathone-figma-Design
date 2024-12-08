import Image from 'next/image'

import React from 'react'

const Featuredprod = () => {
  return (
    <div className='container mx-auto my-32'>
        <div className='flex justify-center items-center'>
            <h1 className='text-blue-950 text-[42px]'>Featured Products</h1>
        </div>


        <div className='flex flex-col lg:flex-row justify-center items-center space-x-5'>
            <div className='bg-white w-[270px] h-[361px] rounded-lg shadow space-y-3'>
                <div className='flex justify-center items-center bg-slate-100 object-cover w-[270px] h-[236px]'>
                    <Image src="/images/div1chair.svg" alt='img' width={178} height={178}/>

                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-pink-500'>Cantilever chair</h1>

                </div>

                <div className='flex space-x-2 justify-center items-center'>
                        
                    <div className=' justify-center items-center'>
                        <div className='bg-green-400 rounded-full w-[14px] h-[4px] '></div>

                    </div>

                    <div className='flex justify-center items-center'>
                        <div className='bg-pink-500 rounded-full w-[14px] h-[4px] '></div>

                    </div>


                    <div className='flex justify-center items-center'>
                        <div className='bg-blue-900 rounded-full w-[14px] h-[4px] '></div>

                    </div>


                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-blue-900'>Code - Y523201</h1>
                    <p className='text-blue-900'>$42.00</p>

                </div>


            </div>

            <div className='bg-blue-900 w-[270px] h-[361px] rounded-lg shadow space-y-3'>
                <div className='flex justify-center items-center bg-slate-100 object-cover w-[270px] h-[236px]'>                    
                    <Image src="/images/div2chair.svg" alt='img' width={178} height={178}/>

                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-pink-500'>Cantilever chair</h1>

                </div>

                <div className='flex space-x-2 justify-center items-center'>
                        
                    <div className=' justify-center items-center'>
                        <div className='bg-green-400 rounded-full w-[14px] h-[4px] '></div>

                    </div>

                    <div className='flex justify-center items-center'>
                        <div className='bg-pink-500 rounded-full w-[14px] h-[4px] '></div>

                    </div>


                    <div className='flex justify-center items-center'>
                        <div className='bg-yellow-500 rounded-full w-[14px] h-[4px] '></div>

                    </div>


                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-white'>Code - Y523201</h1>
                    <p className='text-white'>$42.00</p>

                </div>


            </div>


            <div className='bg-white w-[270px] h-[361px] rounded-lg shadow space-y-3'>
                <div className='flex justify-center items-center bg-slate-100 object-cover w-[270px] h-[236px]'>
                    <Image src="/images/div3chair.svg" alt='img' width={178} height={178}/>

                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-pink-500'>Cantilever chair</h1>

                </div>

                <div className='flex space-x-2 justify-center items-center'>
                        
                    <div className=' justify-center items-center'>
                        <div className='bg-green-400 rounded-full w-[14px] h-[4px] '></div>

                    </div>

                    <div className='flex justify-center items-center'>
                        <div className='bg-pink-500 rounded-full w-[14px] h-[4px] '></div>

                    </div>


                    <div className='flex justify-center items-center'>
                        <div className='bg-blue-900 rounded-full w-[14px] h-[4px] '></div>

                    </div>


                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-blue-900'>Code - Y523201</h1>
                    <p className='text-blue-900'>$42.00</p>

                </div>


            </div>


            <div className='bg-white w-[270px] h-[361px] rounded-lg shadow space-y-3'>
                <div className='flex justify-center items-center bg-slate-100 object-cover w-[270px] h-[236px]'>
                    <Image src="/images/div4chair.svg" alt='img' width={178} height={178}/>

                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-pink-500'>Cantilever chair</h1>

                </div>

                <div className='flex space-x-2 justify-center items-center'>
                        
                    <div className=' justify-center items-center'>
                        <div className='bg-green-400 rounded-full w-[14px] h-[4px] '></div>

                    </div>

                    <div className='flex justify-center items-center'>
                        <div className='bg-pink-500 rounded-full w-[14px] h-[4px] '></div>

                    </div>


                    <div className='flex justify-center items-center'>
                        <div className='bg-blue-900 rounded-full w-[14px] h-[4px] '></div>

                    </div>


                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-blue-900'>Code - Y523201</h1>
                    <p className='text-blue-900'>$42.00</p>

                </div>


            </div>


        </div>

        <div className='flex justify-center items-center space-x-2 my-12'>
            <div className='bg-pink-500 w-[24px] h-[4px] rounded-full'></div>
            <div className='bg-pink-400 w-[24px] h-[4px] rounded-full'></div>
            <div className='bg-pink-300 w-[24px] h-[4px] rounded-full'></div>
            <div className='bg-pink-200 w-[24px] h-[4px] rounded-full'></div>

        </div>
    </div>
  )
}

export default Featuredprod
