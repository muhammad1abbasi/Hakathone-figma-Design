import Image from 'next/image'

import React from 'react'

const LoginBar = () => {
  return (
    <div className='container mx-auto my-24'>
        <div className='flex justify-center items-center'>
         <div className='bg-white border shadow-lg w-[544px] h-[474px] justify-center items-center flex'>

            <div className='flex flex-col justify-center items-center space-y-6'>
                <h1 className='text-[32px] text-blue-950 font-josifin'>Login</h1>
                <p className='text-[17px] text-gray-400 font-josifin'>Please login using account detail bellow.</p>
               <div  className='flex border shadow w-[432px] h-[47px]'>
               <input type="text" placeholder='Email Address' />
               </div>
                <div  className='flex border shadow w-[432px] h-[47px] items-start'>
               <input type="text" placeholder='Email Address' />
               </div>
               <p className='text-[17px] text-gray-400 font-josifin'>Forgot your password?</p>

               <button className='flex bg-pink-500 w-[432px] h-[47px] items-center justify-center text-white text-[16px]'>Sign In</button>

               <p className='text-[17px] text-gray-400 font-josifin'>Dont have an Account?Create account</p>

            </div>


         </div>
        </div>

        <div className='flex justify-center items-center my-40'>
        <Image src="/images/image 1174.svg" alt='img' width={904} height={93}/>

        </div>

      
    </div>
  )
}

export default LoginBar
