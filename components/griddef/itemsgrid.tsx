import Image from 'next/image'

import React from 'react'

const Itemsgrid = () => {
  return (
    <div className='container mx-auto my-10'>
        <div className='flex flex-col sm:flex-row justify-evenly'>
            <div className=''>
                <h1 className='text-[22px] text-blue-950 font-josifin'>Ecommerce Acceories & Fashion item </h1>
                <p className='text-[12px] text-gray-300 font-josifin'>About 9,620 results (0.62 seconds)</p>
            </div>
            <div className='flex justify-evenly'>
                <div className='flex space-x-3'>
                    <p className='font-josifin text-blue-950 text-[16px]'>Per Page:</p>
                    <div className='border shadow w-[55px] h-[25px]'></div>
                </div>

                <div className='flex space-x-3'>
                    <p className='font-josifin text-blue-950 text-[16px]'>sort by:</p>
                    <div className='border shadow w-[55px] h-[25px]'>
                        
                    </div>
                </div>

                <div className='flex space-x-3'>
                    <p className='font-josifin text-blue-950 text-[16px]'>view:</p>
                    <div className='border shadow w-[55px] h-[25px]'></div>
                </div>

            </div>


        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-5 space-y-5 justify-center items-center">
        <div className="bg-white w-[270px] h-[363px] flex flex-col space-y-3 rounded shadow ">
          <div className=" w-[270px] h-[280px] flex justify-center items-center">
            <Image
              src="/images/sectionone/Ecommerce accesories.svg"
              alt="img"
              width={201}
              height={201}
            />
          </div>
        </div>

        <div className="bg-white w-[270px] h-[363px] flex flex-col space-y-3 rounded shadow ">
          <div className=" w-[270px] h-[280px] flex justify-center items-center">
            <Image
              src="/images/sectionone/Ecommerce accesories-1.svg"
              alt="img"
              width={201}
              height={201}
            />
          </div>
        </div>

        <div className="bg-white w-[270px] h-[363px] flex flex-col space-y-3 rounded shadow ">
          <div className=" w-[270px] h-[280px] flex justify-center items-center">
            <Image
              src="/images/sectionone/Ecommerce accesories-2.svg"
              alt="img"
              width={201}
              height={201}
            />
          </div>
        </div>

        <div className="bg-white w-[270px] h-[363px] flex flex-col space-y-3 rounded shadow ">
          <div className=" w-[270px] h-[280px] flex justify-center items-center">
            <Image
              src="/images/sectionone/Ecommerce accesories-3.svg"
              alt="img"
              width={201}
              height={201}
            />
          </div>
        </div>

        <div className="bg-white w-[270px] h-[363px] flex flex-col space-y-3 rounded shadow ">
          <div className=" w-[270px] h-[280px] flex justify-center items-center">
            <Image
              src="/images/sectionone/Ecommerce accesories-4.svg"
              alt="img"
              width={201}
              height={201}
            />
          </div>
        </div>

        <div className="bg-white w-[270px] h-[363px] flex flex-col space-y-3 rounded shadow ">
          <div className=" w-[270px] h-[280px] flex justify-center items-center">
            <Image
              src="/images/sectionone/Ecommerce accesories-5.svg"
              alt="img"
              width={201}
              height={201}
            />
          </div>
        </div>

        <div className="bg-white w-[270px] h-[363px] flex flex-col space-y-3 rounded shadow ">
          <div className=" w-[270px] h-[280px] flex justify-center items-center">
            <Image
              src="/images/sectionone/Ecommerce accesories-6.svg"
              alt="img"
              width={201}
              height={201}
            />
          </div>
        </div>

        <div className="bg-white w-[270px] h-[363px] flex flex-col space-y-3 rounded shadow ">
          <div className=" w-[270px] h-[280px] flex justify-center items-center">
            <Image
              src="/images/sectionone/Ecommerce accesories-7.svg"
              alt="img"
              width={201}
              height={201}
            />
          </div>
        </div>

        <div className="bg-white w-[270px] h-[363px] flex flex-col space-y-3 rounded shadow ">
          <div className=" w-[270px] h-[280px] flex justify-center items-center">
            <Image
              src="/images/sectionone/Ecommerce accesories-8.svg"
              alt="img"
              width={201}
              height={201}
            />
          </div>
        </div>

        <div className="bg-white w-[270px] h-[363px] flex flex-col space-y-3 rounded shadow ">
          <div className=" w-[270px] h-[280px] flex justify-center items-center">
            <Image
              src="/images/sectionone/Ecommerce accesories-9.svg"
              alt="img"
              width={201}
              height={201}
            />
          </div>
        </div>

        <div className="bg-white w-[270px] h-[363px] flex flex-col space-y-3 rounded shadow ">
          <div className=" w-[270px] h-[280px] flex justify-center items-center">
            <Image
              src="/images/sectionone/Ecommerce accesories-10.svg"
              alt="img"
              width={201}
              height={201}
            />
          </div>
        </div>

        <div className="bg-white w-[270px] h-[363px] flex flex-col space-y-3 rounded shadow ">
          <div className=" w-[270px] h-[280px] flex justify-center items-center">
            <Image
              src="/images/sectionone/Ecommerce accesories-11.svg"
              alt="img"
              width={201}
              height={201}
            />
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center my-40'>
        <Image src="/images/image 1174.svg" alt='img' width={904} height={93}/>

        </div>
      

       
    </div>
  )
}

export default Itemsgrid
