import Image from 'next/image'

import React from 'react'

const Orderhero = () => {
  return (
    <div className='container mx-auto my-44'>
        <div className='flex flex-col sm:flex-row justify-evenly '>
            <div className='flex mb-52 justify-center items-center md:justify-start md:items-start'>
                <Image src="/images/OrderComplete/Group.svg" alt='img' width={94} height={94}/>

            </div>

            <div className='flex flex-col justify-center items-center text-center space-y-8'>
            <Image src="/images/OrderComplete/Vector 15.svg" alt='img' width={46.08} height={36.91}/>
            <h1 className='text-blue-950 font-bold font-josifin text-[36px] '>Your Order Is Completed! </h1>
            <p className='text-gray-400 font-josifin text-[16px]'>Thank you for your order! Your order is being processed and will be completed within 3-6 <br /> hours. You will receive an email confirmation when your order is completed.</p>
              <button className='text-white font-josifin border bg-pink-500 rounded w-[208px] h-[59px]'>Continue Shopping</button>


            </div>


            <div className='flex md:justify-end md:items-end justify-center items-center my-10 md:my-0'>
            <Image src="/images/OrderComplete/checklist 1.svg" alt='img' width={94} height={94}/>

            </div>

        </div>

        <div className='flex justify-center items-center my-40'>
        <Image src="/images/image 1174.svg" alt='img' width={904} height={93}/>

        </div>
      
    </div>
  )
}

export default Orderhero
