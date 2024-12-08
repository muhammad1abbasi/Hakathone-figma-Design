import Image from 'next/image'

import React from 'react'

const Finalcardsec = () => {
  return (
    <div className='container mx-auto my-36'>
      <div className='flex justify-evenly items-center'>
        <div className='flex flex-col  md:flex-row md:space-x-10 bg-white  shadow-lg'>
            <div className='flex-col space-y-5'>
              <div className=' '>
                <Image src="/images/blacksof.svg" alt='img' width={370} height={255} className='rounded-lg'/>
              </div>
            
              <div className='flex space-x-2 '>
                <h1 className='text-blue-900 text-[14px]'>SaberAli</h1>
                <p className='text-blue-900 text-[14px]'>21 August,2020</p>

                </div>

                <div className='flex flex-col space-y-5 '>
                    <h1 className='text-blue-900 text-[18px]'>Top esssential Trends in 2021</h1>
                    <p className='text-[16px] text-gray-400'>More off this less hello samlande lied much <br />
                       over tightly circa horse taped mightly</p>
                    <p className='text-blue-900 text-[19px]'>Read More</p>

                </div>


            </div>

            <div className='flex-col space-y-5'>
              <div className='object-cover '>
                <Image src="/images/whiteandbluesof.svg" alt='img' width={370} height={255}/>
              </div>
            
              <div className='flex space-x-2 '>
                <h1 className='text-blue-900 text-[14px]'>SaberAli</h1>
                <p className='text-blue-900 text-[14px]'>21 August,2020</p>

                </div>

                <div className='flex flex-col space-y-5 '>
                    <h1 className='text-blue-900 text-[18px]'>Top esssential Trends in 2021</h1>
                    <p className='text-[16px] text-gray-400'>More off this less hello samlande lied much <br />
                       over tightly circa horse taped mightly</p>
                    <p className='text-blue-900 text-[19px]'>Read More</p>

                </div>


            </div>

            <div className='flex-col space-y-5'>
              <div className='object-cover '>
                <Image src="/images/whitesof.svg" alt='img' width={370} height={255}/>
              </div>
            
              <div className='flex space-x-2 '>
                <h1 className='text-blue-900 text-[14px]'>SaberAli</h1>
                <p className='text-blue-900 text-[14px]'>21 August,2020</p>

                </div>

                <div className='flex flex-col space-y-5 '>
                    <h1 className='text-blue-900 text-[18px]'>Top esssential Trends in 2021</h1>
                    <p className='text-[16px] text-gray-400'>More off this less hello samlande lied much <br />
                       over tightly circa horse taped mightly</p>
                    <p className='text-blue-900 text-[19px]'>Read More</p>

                </div>


            </div>


        </div>

      </div>
    </div>
  )
}

export default Finalcardsec
