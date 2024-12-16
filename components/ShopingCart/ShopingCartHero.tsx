import React from 'react'
import Image from 'next/image'

const ShopingCartHero = () => {
  return (
    <div className='container mx-auto my-10'>
        <div className='grid grid-cols-2 xl:grid-cols-5'>
            <div className='flex flex-col space-y-16'>
                <div>
                    <h1 className='text-[20px] text-blue-950 font-josifin font-bold'>Product</h1>
                </div>
                <div className='flex space-x-5 items-center'>
                    <div>
                        <Image src="/images/ShopingCart/Rectangle 34 (2).svg" alt='img' width={83} height={87}/>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='text-[14px] text-blue-950 font-josifin'>Ut diam consequat</h1>
                        <p className='text-[14px] text-gray-300 font-josifin'>Color: Brown</p>
                        <p className='text-[14px] text-gray-300 font-josifin'>Size: XL</p>
                      
                    </div>

                </div>

                <div className='flex space-x-5 items-center'>
                    <div>
                        <Image src="/images/ShopingCart/Rectangle 35.svg" alt='img' width={83} height={87}/>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='text-[14px] text-blue-950 font-josifin'>Vel faucibus posuere</h1>
                        <p className='text-[14px] text-gray-300 font-josifin'>Color: Brown</p>
                        <p className='text-[14px] text-gray-300 font-josifin'>Size: XL</p>
                      
                    </div>

                </div>

                <div className='flex space-x-5 items-center'>
                    <div>
                        <Image src="/images/ShopingCart/Rectangle 36.svg" alt='img' width={83} height={87}/>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='text-[14px] text-blue-950 font-josifin'>Ac vitae vestibulum</h1>
                        <p className='text-[14px] text-gray-300 font-josifin'>Color: Brown</p>
                        <p className='text-[14px] text-gray-300 font-josifin'>Size: XL</p>
                      
                    </div>

                </div>

                <div className='flex space-x-5 items-center'>
                    <div>
                        <Image src="/images/ShopingCart/Rectangle 37.svg" alt='img' width={83} height={87}/>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='text-[14px] text-blue-950 font-josifin'>Elit massa diam</h1>
                        <p className='text-[14px] text-gray-300 font-josifin'>Color: Brown</p>
                        <p className='text-[14px] text-gray-300 font-josifin'>Size: XL</p>

                    </div>

                </div>

                <div className='flex space-x-5 items-center'>
                    <div>
                        <Image src="/images/ShopingCart/Rectangle 38.svg" alt='img' width={83} height={87}/>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='text-[14px] text-blue-950 font-josifin'>Proin pharetra elementum</h1>
                        <p className='text-[14px] text-gray-300 font-josifin'>Color: Brown</p>
                        <p className='text-[14px] text-gray-300 font-josifin'>Size: XL</p>
                      
                    </div>

                </div>

                <div className='flex justify-between items-center'>
                    <button className='border bg-pink-500 w-[134px] h-[39px] text-white '>Update Curt</button>
                    <button className='border bg-pink-500 w-[134px] h-[39px] text-white '>Clear Curt</button>

                </div>
            </div>

            <div className='flex flex-col space-y-24 items-center'>
                <div>
                <h1 className='text-[20px] text-blue-950 font-josifin font-bold'>Price</h1>
                </div>

                <div className='flex flex-col space-y-32 '>
                <p className='text-[14px] text-blue-950 font-josifin font-bold'>$32.00</p>
                <p className='text-[14px] text-blue-950 font-josifin font-bold'>$32.00</p>
                <p className='text-[14px] text-blue-950 font-josifin font-bold'>$32.00</p>
                <p className='text-[14px] text-blue-950 font-josifin font-bold'>$32.00</p>
                <p className='text-[14px] text-blue-950 font-josifin font-bold'>$32.00</p>
                </div>
               
            </div>

            <div className='flex flex-col space-y-32 items-center'>
                <div>
                <h1 className='text-[20px] text-blue-950 font-josifin font-bold'>Quantity</h1>
                </div>

                <div className='flex flex-col space-y-32 '>
                    <Image src="/images/ShopingCart/Group 52.svg" alt='img' width={51} height={51}/>
                    <Image src="/images/ShopingCart/Group 52.svg" alt='img' width={51} height={51}/>
                    <Image src="/images/ShopingCart/Group 52.svg" alt='img' width={51} height={51}/>
                    <Image src="/images/ShopingCart/Group 52.svg" alt='img' width={51} height={51}/>
                    <Image src="/images/ShopingCart/Group 52.svg" alt='img' width={51} height={51}/>
                </div>
               
            </div>

            <div className='flex flex-col space-y-24 items-center'>
                <div>
                <h1 className='text-[20px] text-blue-950 font-josifin font-bold'>Total</h1>
                </div>

                <div className='flex flex-col space-y-32 '>
                <p className='text-[14px] text-blue-950 font-josifin font-bold'>$32.00</p>
                <p className='text-[14px] text-blue-950 font-josifin font-bold'>$32.00</p>
                <p className='text-[14px] text-blue-950 font-josifin font-bold'>$32.00</p>
                <p className='text-[14px] text-blue-950 font-josifin font-bold'>$32.00</p>
                <p className='text-[14px] text-blue-950 font-josifin font-bold'>$32.00</p>
                </div>
               
            </div>

            <div className='flex flex-col space-y-10 items-center ml-40 md:ml-0'>
                <div className='flex flex-col  space-y-5'>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-[20px] text-blue-950 font-josifin font-bold'>Cart Totals</h1>
                    </div>

                    <div className='bg-slate-200 border shadow w-[371px] h-[284px]'>
                        <div className='flex justify-between p-6'>
                            <h1>Subtotals:</h1>
                            <h1>£219.00</h1>

                        </div>
                        <div className='border border-b border-gray-400 w-[310px] justify-center items-center ml-8 '></div>

                        <div className='flex justify-between p-6'>
                            <h1>Totals:</h1>
                            <h1>£325.00</h1>

                        </div>
                        <div className='border border-b border-gray-400 w-[310px] justify-center items-center ml-8 '></div>
                        <div className='flex space-x-2 p-6'>
                            <Image src="/images/ShopingCart/uil_check.svg" alt='img' width={8} height={8}/>
                            <h1 className='text-[12px] text-gray-300 font-josifin'>Shipping & taxes calculated at checkout</h1>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='bg-green-500 w-[312px] h-[40px] border text-white'>Proceed To Checkout</button>

                        </div>

                        
                    </div>

                    <div className='flex justify-center items-center'>
                        <h1 className='text-[20px] text-blue-950 font-josifin font-bold'>Cart Totals</h1>
                    </div>

                    <div className='bg-slate-200 border shadow w-[371px] h-[284px] p-10'>
                        <div className='flex flex-col space-y-5'>
                        <div className='flex flex-col space-y-3'>
                            <h1 className='text-gray-400 text-[14px] font-josifin'>Bangladesh</h1>
                            <div className='bg-gray-400 w-[307px] border border-b'></div>

                        </div>

                        <div className='flex flex-col space-y-3'>
                            <h1 className='text-gray-400 text-[14px] font-josifin'>Mirpur Dhaka - 1200</h1>
                            <div className='bg-gray-400 w-[307px] border border-b'></div>

                        </div>

                        <div className='flex flex-col space-y-3'>
                            <h1 className='text-gray-400 text-[14px] font-josifin'>Postal Code</h1>
                            <div className='bg-gray-400 w-[307px] border border-b'></div>

                        </div>

                        <div className=''>
                            <button className='border bg-pink-500 w-[179px] h-[41px] text-white '>Calculate Shiping</button>
                        </div>

                        </div>
                    </div>

                </div>



                {/* <div></div> */}

            </div>


            
        </div>
      
    </div>
  )
}

export default ShopingCartHero
