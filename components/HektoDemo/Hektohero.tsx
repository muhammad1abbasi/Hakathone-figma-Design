import React from 'react'
import Image from 'next/image'

const Hektohero = () => {
  return (
    <div className='container mx-auto my-10'>
      <div className='flex flex-col lg:flex-row justify-center space-x-9'>
        <div className='flex flex-col space-y-5'>
          <div className='flex flex-col space-y-2'>
            <h1 className='text-[24px] text-blue-950 font-josifin font-bold'>Hekto Demo</h1>
            <p className='text-[14px] font-josifin text-gray-300 '>Cart/ Information/ Shipping/ Payment</p>
          </div>

          <div className='bg-slate-100 md:w-[770px] md:h-[920px] p-10 flex flex-col space-y-5'>
            <div className='flex justify-between'>
              <h1 className='text-[18px] text-blue-950 font-josifin font-bold'>Contact Information</h1>
              <p className='text-[14px] font-josifin text-gray-300 '>Already have an account? Log in</p>
            </div>

            <div className='flex flex-col space-y-2'>
              <p className='text-[14px] font-josifin text-gray-300 '>Email or mobile phone number</p>
              <div className='bg-slate-300 border md:w-[698px] '></div>
              <div className='flex space-x-2'>
                <Image src="/images/HektoDemo/uil_check.svg" alt='img' width={8} height={8}/>
                <p className='text-[14px] font-josifin text-gray-300 '>Keep me up to date on news and excluive offers</p>
              </div>
            </div>

            <div className='flex flex-col py-20'>
              <div className='flex'>
              <h1 className='text-[18px] text-blue-950 font-josifin font-bold'>Shipping address</h1>
              </div>
              <div className='flex flex-col md:flex-row md:space-x-5'>
                <div className='flex flex-col space-y-2 my-10'>
                  <p className='text-[14px] font-josifin text-gray-300 '>First name (optional)</p>
                  <div className='bg-slate-300 border md:w-[336px] '></div>
                </div>
                <div className='flex flex-col space-y-2 my-10'>
                  <p className='text-[14px] font-josifin text-gray-300 '>Last name</p>
                  <div className='bg-slate-300 border md:w-[336px]'></div>
                </div>

              </div>

              <div className='flex flex-col my-5 space-y-2'>
                <p className='text-[14px] font-josifin text-gray-300 '>Address</p>
                <div className='bg-slate-300 border md:w-[698px] '></div>
              </div>

              <div className='flex flex-col my-5 space-y-2'>
                <p className='text-[14px] font-josifin text-gray-300 '>Appaetnentment,suit,e.t.c (optinal)</p>
                <div className='bg-slate-300 border md:w-[698px] '></div>
              </div>

              <div className='flex flex-col my-5 space-y-2'>
                <p className='text-[14px] font-josifin text-gray-300 '>City</p>
                <div className='bg-slate-300 border md:w-[698px] '></div>
              </div>

              <div className='flex flex-col md:flex-row space-x-5'>
                <div className='flex flex-col space-y-2 my-10'>
                  <p className='text-[14px] font-josifin text-gray-300 '>First name (optional)</p>
                  <div className='bg-slate-300 border md:w-[336px] '></div>
                </div>
                <div className='flex flex-col space-y-2 my-10'>
                  <p className='text-[14px] font-josifin text-gray-300 '>Last name</p>
                  <div className='bg-slate-300 border md:w-[336px]'></div>
                </div>

              </div>

            </div>

            <div className='flex items-center'>
              <button className='bg-pink-500 text-white w-[182px] h-[44px]'>Continue Shipping</button>
            </div>
          </div>

        </div>




        <div className='flex flex-col '>
          <div className='flex flex-col space-y-14 my-[85px]'>
            <div className='flex space-x-3'>
              <div className='flex'>
                <Image src="/images/HektoDemo/Bag.svg" alt='img' width={83} height={87}/>
              </div>
              <div className='flex space-x-24 items-center'>
                <div className='flex flex-col space-y-3'>
                  <h1 className='text-[14px] text-black font-josifin'>Ut diam consequat</h1>
                  <p className='text-[12px] text-gray-300 font-josifin'>Color: Brown</p>
                  <p className='text-[12px] text-gray-300 font-josifin'>Size: XL</p>
                </div>

                <div className='flex '>
                  <h1 className='text-[14px] text-black font-josifin font-bold'>$32.00</h1>
                </div>
              </div>
            </div>

            <div className='flex space-x-3'>
              <div className='flex'>
                <Image src="/images/HektoDemo/Rectangle 144.svg" alt='img' width={83} height={87}/>
              </div>
              <div className='flex space-x-24 items-center'>
                <div className='flex flex-col space-y-3'>
                  <h1 className='text-[14px] text-black font-josifin'>Ut diam consequat</h1>
                  <p className='text-[12px] text-gray-300 font-josifin'>Color: Brown</p>
                  <p className='text-[12px] text-gray-300 font-josifin'>Size: XL</p>
                </div>

                <div className='flex '>
                  <h1 className='text-[14px] text-black font-josifin font-bold'>$32.00</h1>
                </div>
              </div>
            </div>

            <div className='flex space-x-3'>
              <div className='flex'>
                <Image src="/images/HektoDemo/Rectangle 145.svg" alt='img' width={83} height={87}/>
              </div>
              <div className='flex space-x-24 items-center'>
                <div className='flex flex-col space-y-3'>
                  <h1 className='text-[14px] text-black font-josifin'>Ut diam consequat</h1>
                  <p className='text-[12px] text-gray-300 font-josifin'>Color: Brown</p>
                  <p className='text-[12px] text-gray-300 font-josifin'>Size: XL</p>
                </div>

                <div className='flex '>
                  <h1 className='text-[14px] text-black font-josifin font-bold'>$32.00</h1>
                </div>
              </div>
            </div>

            <div className='flex space-x-3'>
              <div className='flex'>
                <Image src="/images/HektoDemo/Rectangle 146.svg" alt='img' width={83} height={87}/>
              </div>
              <div className='flex space-x-24 items-center'>
                <div className='flex flex-col space-y-3'>
                  <h1 className='text-[14px] text-black font-josifin'>Ut diam consequat</h1>
                  <p className='text-[12px] text-gray-300 font-josifin'>Color: Brown</p>
                  <p className='text-[12px] text-gray-300 font-josifin'>Size: XL</p>
                </div>

                <div className='flex '>
                  <h1 className='text-[14px] text-black font-josifin font-bold'>$32.00</h1>
                </div>
              </div>
            </div>
          </div>




          <div className='bg-slate-200 border shadow md:w-[371px] md:h-[284px]'>
                                  <div className='flex justify-between p-6'>
                                      <h1>Subtotals:</h1>
                                      <h1>£219.00</h1>
          
                                  </div>
                                  <div className='border border-b border-gray-400 md:w-[310px] justify-center items-center md:ml-8 '></div>
          
                                  <div className='flex justify-between p-6'>
                                      <h1>Totals:</h1>
                                      <h1>£325.00</h1>
          
                                  </div>
                                  <div className='border border-b border-gray-400 md:w-[310px] justify-center items-center md:ml-8 '></div>
                                  <div className='flex space-x-2 p-6'>
                                      <Image src="/images/ShopingCart/uil_check.svg" alt='img' width={8} height={8}/>
                                      <h1 className='text-[12px] text-gray-300 font-josifin'>Shipping & taxes calculated at checkout</h1>
                                  </div>
                                  <div className='flex justify-center items-center'>
                                      <button className='bg-green-500 w-[312px] h-[40px] border text-white'>Proceed To Checkout</button>
          
                                  </div>
          
                                  
                              </div>

        </div>

      </div>
      
    </div>
  )
}

export default Hektohero
