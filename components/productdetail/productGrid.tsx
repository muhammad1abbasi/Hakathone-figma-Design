import Image from 'next/image'

import React from 'react'

const ProductGrid = () => {
  return (
    <div className='container mx-auto my-5'>
       <div className='flex flex-col lg:flex-row justify-center items-center my-36'>
          <div className='flex flex-col space-y-2'>
            <Image src="/images/products/Rectangle 134.svg" alt='img' width={151} height={155}/>
            <Image src="/images/products/Rectangle 136.svg" alt='img' width={151} height={155}/>
            <Image src="/images/products/Rectangle 137.svg" alt='img' width={151} height={155}/>
           </div>

          <div className='flex md:ml-5 my-4 md:my-0'>
           <Image src="/images/products/Rectangle 138.svg" alt='img' width={375} height={487}/>

          </div>

          <div className='flex flex-col space-y-5 ml-5'>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-[36px] text-blue-950 font-josifin font-bold'>Playwood arm chair</h1>
                <div className='flex space-x-2'>
                <Image src="/images/products/Group 236.svg" alt='img' width={69} height={12}/>
                <p>(22)</p>
                </div>

                <div className='flex space-x-2'>
                    <h1 className='text-blue-950 text-[16px] font-josifin'>$32.00</h1>
                    <h1 className='text-pink-500 text-[16px] font-josifin'>$32.00</h1>
                </div>

                <div className='flex flex-col space-y-2'>
                    <h1 className='text-[16px] font-josifin text-blue-950'>Color</h1>
                    <p className='text-[16px] text-gray-400 font-josifin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus <br /> porttitor purus, et volutpat sit.</p>
                    <p className='text-[16px] text-blue-950 font-josifin'>Add To cart</p>

                </div>

                <div className='flex flex-col space-y-7'>
                    <h1 className='text-[16px] font-josifin text-blue-950'>Categories:</h1>
                    <p className='text-[16px] text-gray-400 font-josifin'>Tags</p>
                    <p className='text-[16px] text-blue-950 font-josifin'>Share</p>

                </div>

            </div>


          </div>

        </div>

        <div className='flex flex-col my-5 space-y-5 '>
            <div className='flex flex-col md:flex-row md:space-x-32'>
                <h1 className='text-[24px] text-blue-950 font-bold font-josifin ' >Description</h1>
                <h1 className='text-[24px] text-blue-950 font-bold font-josifin ' >Additional Info</h1>
                <h1 className='text-[24px] text-blue-950 font-bold font-josifin ' >Reviews</h1>
                <h1 className='text-[24px] text-blue-950 font-bold font-josifin ' >Video</h1>

            </div>

            <div className='flex flex-col space-y-5'>
                <h1 className='text-[24px] text-blue-950 font-bold font-josifin'>Varius tempor.</h1>
                <p className='text-[16px] font-josifin text-gray-400 '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                <p className='text-[16px] font-josifin text-gray-400 '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                <p className='text-[16px] font-josifin text-gray-400 '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

            </div>


            <div className='flex flex-col space-y-5'>
                <h1 className='text-[24px] text-blue-950 font-bold font-josifin'>Varius tempor.</h1>
                <p className='text-[16px] font-josifin text-gray-400 '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                <p className='text-[16px] font-josifin text-gray-400 '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                <p className='text-[16px] font-josifin text-gray-400 '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                <p className='text-[16px] font-josifin text-gray-400 '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>

        </div> 

        <div className='ml-20 my-14'>
                <h1 className='text-[36px] text-blue-950 font-josifin font-bold'>Related Products</h1>
               </div>

        <div className='flex flex-col md:flex-row  space-x-2 justify-evenly my-14'>
            <div className='flex flex-col my-5 space-y-3'>
              
            <Image src="/images/products/Rectangle 128.svg" alt='img' width={270} height={340}/>
            <div className='flex space-x-16'>
                <h1 className='text-[16px] text-blue-950 font-josifin'> Mens Fashion Wear</h1>
                <Image src="/images/products/Group 236.svg" alt='img' width={69} height={12}/>
            </div>

            <h1 className='text-[16px] text-blue-950 font-josifin'>$43.00</h1>


            </div>

            <div className='flex flex-col my-5 space-y-3'>
               
            <Image src="/images/products/Group 233.svg" alt='img' width={270} height={340}/>
            <div className='flex space-x-16'>
                <h1 className='text-[16px] text-blue-950 font-josifin'> Mens Fashion Wear</h1>
                <Image src="/images/products/Group 236.svg" alt='img' width={69} height={12}/>
            </div>

            <h1 className='text-[16px] text-blue-950 font-josifin'>$43.00</h1>


            </div>


            <div className='flex flex-col my-5 space-y-3'>
               
            <Image src="/images/products/Rectangle 130.svg" alt='img' width={270} height={340}/>
            <div className='flex space-x-16'>
                <h1 className='text-[16px] text-blue-950 font-josifin'> Mens Fashion Wear</h1>
                <Image src="/images/products/Group 236.svg" alt='img' width={69} height={12}/>
            </div>

            <h1 className='text-[16px] text-blue-950 font-josifin'>$43.00</h1>


            </div>


            <div className='flex flex-col my-5 space-y-3'>
             
            <Image src="/images/products/Rectangle 131.svg" alt='img' width={270} height={340}/>
            <div className='flex space-x-16'>
                <h1 className='text-[16px] text-blue-950 font-josifin'> Mens Fashion Wear</h1>
                <Image src="/images/products/Group 236.svg" alt='img' width={69} height={12}/>
            </div>

            <h1 className='text-[16px] text-blue-950 font-josifin'>$43.00</h1>


            </div>



        </div>

        <div className='flex justify-center items-center my-40'>
        <Image src="/images/image 1174.svg" alt='img' width={904} height={93}/>

        </div>
      
    </div>
  )
}

export default ProductGrid ;
