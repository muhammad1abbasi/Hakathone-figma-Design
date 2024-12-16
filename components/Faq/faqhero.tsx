import Image from 'next/image'
import React from 'react'

const Faqhero = () => {
  return (
    <div className='container mx-auto my-5'>
        <div className='flex flex-col sm:flex-row justify-evenly items-center'>
            <div className='flex flex-col space-y-10'>
                <div className='flex '>
                    <h1 className='text-[36px] text-blue-950 font-bold font-josifin'>Generel Information</h1>
                </div>
                <div className='flex flex-col space-y-5'>
                    <h1 className='text-[17px] text-blue-950 font-bold font-josifin'>Eu dictumst cum at sed euismood condimentum?</h1>
                    <p className='text-[16px] text-gray-400 font-josifin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br /> tristique mollis vitae, consequat gravida sagittis.</p>

                </div>

                <div className='flex flex-col space-y-5'>
                    <h1 className='text-[17px] text-blue-950 font-bold font-josifin'>Magna bibendum est fermentum eros.</h1>
                    <p className='text-[16px] text-gray-400 font-josifin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br /> tristique mollis vitae, consequat gravida sagittis.</p>

                </div>


                <div className='flex flex-col space-y-5'>
                    <h1 className='text-[17px] text-blue-950 font-bold font-josifin'>Odio muskana hak eris conseekin sceleton?</h1>
                    <p className='text-[16px] text-gray-400 font-josifin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br /> tristique mollis vitae, consequat gravida sagittis.</p>

                </div>

                <div className='flex flex-col space-y-5'>
                    <h1 className='text-[17px] text-blue-950 font-bold font-josifin'>Elit id blandit sabara boi velit gua mara?</h1>
                    <p className='text-[16px] text-gray-400 font-josifin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br /> tristique mollis vitae, consequat gravida sagittis.</p>

                </div>
            </div>

                <div className='flex flex-col bg-slate-50 md:w-[566px] md:h-[738px] p-10 '>
                    <div className=''>
                        <h1 className='text-[24px] text-blue-950 font-bold font-josifin'>Ask a Question</h1>
                    </div>


                    <div className=' my-36 flex flex-col space-y-10'>
                     <input type="text" placeholder='Your Name' className='border shadow md:w-[445px] md:h-[50px] p-2' />

                     <input type="text" placeholder='Subject' className='border shadow md:w-[445px] md:h-[50px] p-2' />

                     <input type="text" placeholder='Subject' className='border shadow md:w-[445px] md:h-[197px] pb-32 pl-5 ' />

                     <button className='border bg-pink-600 text-white font-josifin md:w-[156px] md:h-[48px] rounded'>Send mail</button>
                    
                    </div>

                    

                </div>

        </div>

        
       <div className='flex justify-center items-center my-40'>
        <Image src="/images/image 1174.svg" alt='img' width={904} height={93}/>

        </div>
      

      
    </div>
  )
}

export default Faqhero
