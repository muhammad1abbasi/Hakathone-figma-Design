import Image from 'next/image'

import React from 'react'

const Abouthero = () => {
  return (
    <div className='container mx-auto my-16' >
        <div className='flex flex-col md:flex-row justify-center space-x-5 items-center '>
            <div className=''>
                <Image src="/images/AboutUs/Rectangle 56.svg" alt='img' width={555} height={390} className='border shadow-lg'/>

            </div>

            <div className='flex flex-col space-y-24 '>
                <div className='space-y-5'>
                    <h1 className='text-[36px] text-blue-950 font-bold font-josifin'>Know About Our Ecomerce <br />
                    Business, History</h1>
                    <p className='text-[16px] text-gray-300 font-josifin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br /> mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae <br /> eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                </div>

                <div className='flex'>
                <button className='border bg-pink-600 text-white font-josifin md:w-[156px] md:h-[48px] rounded'>Contact us</button>
                </div>


            </div>

        </div>


        <div className='flex justify-center items-center my-40'>
            <h1 className='text-[42px] text-black font-bold font-josifin'>Our Features</h1>

        </div>

        <div className='flex flex-col sm:flex-row justify-evenly items-center my-20'>
            <div className='flex flex-col w-[270px] h-[320px] shadow'>
                <div className='flex justify-center items-center my-8'>
                <Image src="/images/free-delivery 1.svg" alt='img' width={65} height={65}/>
                </div>

               <div className='flex flex-col justify-center items-center'>
               <h1 className='text-blue-900 text-[22px]'>24/7 Support</h1>
               <p className='text-gray-300 text-[16px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
               </div>

            </div>

            <div className='flex flex-col w-[270px] h-[320px] shadow'>
                <div className='flex justify-center items-center my-8'>
                <Image src="/images/cashback 1.svg" alt='img' width={65} height={65}/>
                </div>

               <div className='flex flex-col justify-center items-center'>
               <h1 className='text-blue-900 text-[22px]'>24/7 Support</h1>
               <p className='text-gray-300 text-[16px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
               </div>

            </div>

            <div className='flex flex-col w-[270px] h-[320px] shadow'>
                <div className='flex justify-center items-center my-8'>
                <Image src="/images/premium-quality 1.svg" alt='img' width={65} height={65}/>
                </div>

               <div className='flex flex-col justify-center items-center'>
               <h1 className='text-blue-900 text-[22px]'>24/7 Support</h1>
               <p className='text-gray-300 text-[16px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
               </div>

            </div>

            <div className='flex flex-col w-[270px] h-[320px] shadow'>
                <div className='flex justify-center items-center my-8'>
                <Image src="/images/24-hours.svg" alt='img' width={65} height={65}/>
                </div>

               <div className='flex flex-col justify-center items-center'>
               <h1 className='text-blue-900 text-[22px]'>24/7 Support</h1>
               <p className='text-gray-300 text-[16px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
               </div>

            </div>

        </div>




        <div className='flex flex-col items-center justify-center space-y-5 '>
            <div>
                <h1 className='text-[42px] text-black font-bold font-josifin'>Our Client Say!</h1>
            </div>

            <div className='flex flex-col space-y-5 my-5'>
                <Image src="/images/AboutUS/Group 200.svg" alt='img' width={191} height={64}/>

            </div>
            <div className='flex flex-col '>
                <h1 className='text-[20px] text-blue-950 font-bold font-josifin'>Selina Gomez</h1>
                <p className='text-[15px] text-gray-400 font-josifin'>Ceo At Webecy Digital</p>

            </div>

            <div className='flex items-center text-center'>
                <p className='text-[15px] text-gray-400 font-josifin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin <br /> aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor <br /> aliquam lacus volutpat praesent. </p>
            </div>

            <div className='flex justify-center items-center space-x-1'>
                <div className='flex justify-center items-center bg-pink-400 w-[18px] h-[3px] rounded   '></div>
                <div className='flex justify-center items-center bg-pink-500 w-[18px] h-[5px] rounded  '></div>
                <div className='flex justify-center items-center bg-pink-400 w-[18px] h-[3px] rounded  '></div>
            </div>

        </div>
      
    </div>
  )
}

export default Abouthero ;
