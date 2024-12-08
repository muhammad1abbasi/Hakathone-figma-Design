import Image from 'next/image'

import React from 'react'

const Discount = () => {
  return (
    <div className='container mx-auto '>
        <div className='flex-col justify-center items-center space-y-10'>
           <div className='flex justify-center items-center'>
            <h1 className='text-blue-900 text-[42px]'>Discount Items</h1>
           </div>
            <div className='flex justify-center items-center space-x-3'>
            <p className='text-pink-500'>Wood Chair</p>
            <p>Plastic Chair</p>
            <p>Sofa Colletion</p>

            </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-evenly items-center my-10 '>
            <div className='flex flex-col space-y-9'>
                <h1 className='text-blue-900 text-[35px] '>20% Discount Of All Products</h1>
                <p className='text-pink-500 text-[21px]'>Eams Sofa Compact</p>
                <p className='text-gray-400 text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br /> feugiat habitasse nec, bibendum condimentum.</p>

                <div className='flex justify-evenly space-x-24'>
                    <div className='flex flex-col'>
                    <div className='flex'>
                        <Image src="/images/Vector.svg" alt='img' width={16} height={11}/>
                        <p className='text-gray-300 text-[16px]'>Material expose like metals</p>

                    </div>

                    <div className='flex'>
                        <Image src="/images/Vector.svg" alt='img' width={16} height={11}/>
                        <p className='text-gray-300 text-[16px]'>Simple neutral colours.</p>

                    </div>
                    </div>

                    <div className='flex flex-col'>
                    <div className='flex'>
                        <Image src="/images/Vector.svg" alt='img' width={16} height={11}/>
                        <p className='text-gray-300 text-[16px]'>Clear lines and geomatric figures</p>

                    </div>

                    <div className='flex'>
                        <Image src="/images/Vector.svg" alt='img' width={16} height={11}/>
                        <p className='text-gray-300 text-[16px]'>Material expose like metals</p>

                    </div>
                    </div>

                </div>
                <button className='text-white bg-pink-600 w-[200px] h-[57px]'>Shop now</button>

            </div>

            <div className=''>
                <Image src="/images/modern.svg" alt='img' width={699} height={597}/>

            </div>

        </div>

      
    </div>
  )
}

export default Discount
