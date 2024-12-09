import Image from 'next/image'

import React from 'react'

const FourPage = () => {
  return (
    <div className='container mx-auto my-10'>
       <div className='flex flex-col justify-center items-center'>
       <Image src="/images/noreachpage/Group 123.svg" alt='img' width={913} height={644.43}/>
       <div className='flex justify-center items-center rounded'>
       <button className='flex items-center text-white w-[165px] h-[44px] bg-pink-550 bg-pink-500'>Back To Home Page</button>
       </div>



       </div>

       <div className='flex justify-center items-center my-40'>
        <Image src="/images/image 1174.svg" alt='img' width={904} height={93}/>

        </div>
      
    </div>
  )
}

export default FourPage
