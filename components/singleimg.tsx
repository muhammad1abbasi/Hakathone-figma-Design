import Image from 'next/image'

import React from 'react'

const Singleimg = () => {
  return (
    <div className='container bg- mx-auto max-w-full '>
        <Image src="/images/Rectangle.svg" alt='img' width={1920} height={462}/>
        

        <div className='flex justify-center items-center my-40'>
        <Image src="/images/image 1174.svg" alt='img' width={904} height={93}/>

        </div>
      
    </div>

  )
}

export default Singleimg
