import Image from 'next/image'

import React from 'react'

const Headerone = () => {
  return (
    <div className='h-16 max-w-full mx-auto '>
        <div className='flex justify-evenly items-center bg-violet-700 p-2'>
          <div className='flex flex-col sm:flex-row sm:space-x-16 '>
          <div className='flex justify-center items-center space-x-2 text-start'>
                <Image src="/images/uil_envelope-alt.svg" alt='igm' width={16} height={16}/>
                <h1 className='text-white text-base'>mhhasanul@gmail.com</h1>
            </div>

           <div className='sm:space-x-16 '>
           <div className='flex justify-center items-center space-x-2'>
                <Image src="/images/phonecall.svg" alt='igm' width={16} height={16}/>
                <h1 className='text-white text-base'>(12345)67890</h1>
            </div>
           </div>
          </div>


          <div className='gap-x-5 hidden sm:flex' >
            <div className='flex'>
                <h1 className='text-white'>English</h1>
                <Image src="/images/arrowdonwn.svg" alt='igm' width={16} height={16}/>
            </div>


            <div className='flex '>
                <h1 className='text-white'>USD</h1>
                <Image src="/images/arrowdonwn.svg" alt='igm' width={16} height={16}/>
            </div>

            <div className='flex'>
                <h1 className='text-white'>Login</h1>
                <Image src="/images/user.svg" alt='igm' width={16} height={16}/>
            </div>

            <div className='flex'>
                <h1 className='text-white'>Wishlist</h1>
                <Image src="/images/heart.svg" alt='igm' width={16} height={16}/>
            </div>

            <div className='flex'>
                <Image src="/images/cart.svg" alt='igm' width={24} height={24}/>
            </div>





          </div>

        </div>


      
    </div>
  )
}

export default Headerone
