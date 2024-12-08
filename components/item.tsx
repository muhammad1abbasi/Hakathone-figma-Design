import Image from 'next/image'

import React from 'react'

const Item = () => {
  return (
    <div className='container mx-auto my-7 max-w-full'>
        <div className='bg-slate-100   '>
            <div className='flex flex-col sm:flex-row justify-evenly items-center'>
                <div className='flex justify-center items-center'>
                    <Image src="/images/bluesofa.svg" alt='img' width={558} height={550}/>
                </div>
                <div className='flex flex-col space-y-10'>
                    <h1 className='text-[35px] text-blue-900'>Unique Features Of leatest & <br />
                    Trending Poducts</h1>

                    <div className='flex flex-col '>
                        <div className='flex items-center space-x-3'>
                            <div className='bg-pink-500 w-[11px] h-[11px] rounded-full'></div>
                            <h1 className='text-gray-400 text-[16px]'>All frames constructed with hardwood solids and laminates</h1>

                        </div>

                        <div className='flex items-center space-x-3'>
                            <div className='bg-blue-700 w-[11px] h-[11px] rounded-full'></div>
                            <h1 className='text-gray-400 text-[16px]'>Reinforced with double wood dowels, glue, screw - nails corner <br />
                            blocks and machine nails</h1>

                        </div>

                        <div className='flex items-center space-x-3'>
                            <div className='bg-green-500 w-[11px] h-[11px] rounded-full'></div>
                            <h1 className='text-gray-400 text-[16px]'>Arms, backs and seats are structurally reinforced</h1>

                        </div>

                    </div>

                    <div className='flex items-start '>
                        <button className='bg-pink-600 w-[157px] h-[45px] text-white'>Add to Cart</button>

                    </div>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Item
