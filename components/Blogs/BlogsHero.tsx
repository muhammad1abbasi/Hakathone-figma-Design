import Image from 'next/image'

import React from 'react'

const BlogsHero = () => {
  return (
    <div className='container mx-auto my-20'>
        <div className='flex flex-col md:flex-row justify-center space-x-10 '>
            <div className='flex flex-col space-y-5'>
                <div className='flex flex-col space-y-5'>
                    <div className='flex flex-col space-y-5'>
                        <Image src="/images/Blogs/bruce-mars-FWVMhUa_wbY-unsplash 2.svg" alt='img' width={870} height={453} />
                        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5'>
                            <div className='flex space-x-2'>
                              <Image src="/images/Blogs/Vector.svg" alt='img' width={16} height={16} />
                              <button className='text-[14px] text-blue-950 font-josifin font-bold bg-pink-300 border w-[160px] h-[23px]'>Surf Auxion</button>
                            </div>
                            <div className='flex space-x-2'>
                              <Image src="/images/Blogs/uil_calendar-alt.svg" alt='img' width={16} height={16} />
                              <button className='text-[14px] text-blue-950 font-josifin font-bold bg-pink-300 border w-[160px] h-[23px]'>Aug 09 2020</button>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-5'>
                            <h1 className='text-[30px] text-blue-950 font-josifin font-bold'>Mauris at orci non vulputate diam tincidunt nec.</h1>
                            <p className='text-[16px] text-gray-300 font-josifin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum <br /> eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                            <h1 className='text-[18px] text-blue-950 font-josifin'>Read More </h1>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col space-y-5'>
                    <div className='flex flex-col space-y-5'>
                        <Image src="/images/Blogs/bruce-mars-FWVMhUa_wbY-unsplash 3.svg" alt='img' width={870} height={453} />
                        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5'>
                            <div className='flex space-x-2'>
                              <Image src="/images/Blogs/Vector.svg" alt='img' width={16} height={16} />
                              <button className='text-[14px] text-blue-950 font-josifin font-bold bg-pink-300 border w-[160px] h-[23px]'>Surf Auxion</button>
                            </div>
                            <div className='flex space-x-2'>
                              <Image src="/images/Blogs/uil_calendar-alt.svg" alt='img' width={16} height={16} />
                              <button className='text-[14px] text-blue-950 font-josifin font-bold bg-pink-300 border w-[160px] h-[23px]'>Aug 09 2020</button>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-5'>
                            <h1 className='text-[30px] text-blue-950 font-josifin font-bold'>Aenean vitae in aliquam ultrices lectus. Etiam.</h1>
                            <p className='text-[16px] text-gray-300 font-josifin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum <br /> eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                            <h1 className='text-[18px] text-blue-950 font-josifin'>Read More </h1>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col space-y-5'>
                    <div className='flex flex-col space-y-5'>
                        <Image src="/images/Blogs/bruce-mars-FWVMhUa_wbY-unsplash 4.svg" alt='img' width={870} height={453} />
                        <div className='flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-5'>
                            <div className='flex space-x-2'>
                              <Image src="/images/Blogs/Vector.svg" alt='img' width={16} height={16} />
                              <button className='text-[14px] text-blue-950 font-josifin font-bold bg-pink-300 border w-[160px] h-[23px]'>Surf Auxion</button>
                            </div>
                            <div className='flex space-x-2'>
                              <Image src="/images/Blogs/uil_calendar-alt.svg" alt='img' width={16} height={16} />
                              <button className='text-[14px] text-blue-950 font-josifin font-bold bg-pink-300 border w-[160px] h-[23px]'>Aug 09 2020</button>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-5'>
                            <h1 className='text-[30px] text-blue-950 font-josifin font-bold'>Sit nam congue feugiat nisl, mauris amet nisi. </h1>
                            <p className='text-[16px] text-gray-300 font-josifin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum <br /> eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                            <h1 className='text-[18px] text-blue-950 font-josifin'>Read More </h1>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex flex-col space-y-10'>
                <div className='flex flex-col space-y-2'>
                    <h1 className='text-[22px] font-josifin text-blue-950'>Search</h1>
                    <input type="text" placeholder='Search For Posts' className='p-2 border border-gray-400 w-[270px] h-[40px]' />
                </div>
                <div className='flex flex-col space-y-5'>
                    <div>
                        <h1 className='text-[22px] font-josifin text-blue-950 font-bold'>Categories</h1>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='flex flex-col space-y-2 items-center'>
                            <div className='w-[122px] h-[30px] p-1 text-white bg-pink-500'>Hobbies (14)</div>
                            <div className='w-[122px] h-[30px] p-1'>Women (14)</div>
                            <div className='w-[122px] h-[30px] p-1'>Women (14)</div>
                        </div>
                        <div className='flex flex-col space-y-2 items-center'>
                            <div className='w-[122px] h-[30px] p-1'>Hobbies (14)</div>
                            <div className='w-[122px] h-[30px] p-1'>Women (14)</div>
                            <div className='w-[122px] h-[30px] p-1'>Women (14)</div>
                        </div>

                    </div>

                </div>

                <div className='flex flex-col space-y-5'>
                    <div>
                        <h1 className='text-[22px] font-josifin font-bold'>Recent Post</h1>
                    </div>

                    <div className='flex space-x-5 items-center'>
                        <div>
                            <Image src="/images/Blogs/Rectangle 126.svg" alt='img' width={70} height={51}/>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-[14px] text-gray-300 font-josifin'>It is a long established fact</h1>
                            <p  className='text-[11px] text-gray-300 font-josifin'>Aug 09 2020</p>

                        </div>

                    </div>

                    <div className='flex space-x-5 items-center'>
                        <div>
                            <Image src="/images/Blogs/Rectangle 126 (1).svg" alt='img' width={70} height={51}/>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-[14px] text-gray-300 font-josifin'>It is a long established fact</h1>
                            <p  className='text-[11px] text-gray-300 font-josifin'>Aug 09 2020</p>

                        </div>

                    </div>


                    <div className='flex space-x-5 items-center'>
                        <div>
                            <Image src="/images/Blogs/Rectangle 126 (2).svg" alt='img' width={70} height={51}/>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-[14px] text-gray-300 font-josifin'>It is a long established fact</h1>
                            <p  className='text-[11px] text-gray-300 font-josifin'>Aug 09 2020</p>

                        </div>

                    </div>

                    <div className='flex space-x-5 items-center'>
                        <div>
                            <Image src="/images/Blogs/Rectangle 126 (3).svg" alt='img' width={70} height={51}/>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-[14px] text-gray-300 font-josifin'>It is a long established fact</h1>
                            <p  className='text-[11px] text-gray-300 font-josifin'>Aug 09 2020</p>

                        </div>

                    </div>


                </div>

                
                <div className='flex flex-col space-y-5'>
                    <div>
                        <h1 className='text-[22px] font-josifin font-bold'>Sale Product</h1>
                    </div>

                    <div className='flex space-x-5 items-center'>
                        <div>
                            <Image src="/images/Blogs/Rectangle 126 (4).svg" alt='img' width={70} height={51}/>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-[14px] text-gray-300 font-josifin'>It is a long established fact</h1>
                            <p  className='text-[11px] text-gray-300 font-josifin'>Aug 09 2020</p>

                        </div>

                    </div>

                    <div className='flex space-x-5 items-center'>
                        <div>
                            <Image src="/images/Blogs/Rectangle 126 (5).svg" alt='img' width={70} height={51}/>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-[14px] text-gray-300 font-josifin'>It is a long established fact</h1>
                            <p  className='text-[11px] text-gray-300 font-josifin'>Aug 09 2020</p>

                        </div>

                    </div>


                    <div className='flex space-x-5 items-center'>
                        <div>
                            <Image src="/images/Blogs/Rectangle 126 (6).svg" alt='img' width={70} height={51}/>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-[14px] text-gray-300 font-josifin'>It is a long established fact</h1>
                            <p  className='text-[11px] text-gray-300 font-josifin'>Aug 09 2020</p>

                        </div>

                    </div>
                </div>

                <div className='flex flex-col space-y-5'>
                    <div>
                        <h1 className='text-[22px] font-josifin font-bold'>Offer product</h1>
                    </div>
                    <div className='flex space-x-5 items-center'>
                        <div className='flex flex-col space-y-5'>
                            <div className='flex flex-col space-y-2'>
                                <Image src="/images/Blogs/p0OlRAAYXLY.svg" alt='img' width={126} height={80}/>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-[14px] text-blue-950 font-josifin'>Duis lectus est.</h1>
                                <h1 className='text-[12px] text-gray-300 font-josifin'>$12.00 - $15.00</h1>
                            </div>

                            <div className='flex flex-col space-y-2'>
                                <Image src="/images/Blogs/p0OlRAAYXLY (2).svg" alt='img' width={126} height={80}/>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-[14px] text-blue-950 font-josifin'>Duis lectus est.</h1>
                                <h1 className='text-[12px] text-gray-300 font-josifin'>$12.00 - $15.00</h1>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-5'>
                            <div className='flex flex-col space-y-2'>
                                <Image src="/images/Blogs/p0OlRAAYXLY (1).svg" alt='img' width={126} height={80}/>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-[14px] text-blue-950 font-josifin'>Duis lectus est.</h1>
                                <h1 className='text-[12px] text-gray-300 font-josifin'>$12.00 - $15.00</h1>
                            </div>

                            <div className='flex flex-col space-y-2'>
                                <Image src="/images/Blogs/p0OlRAAYXLY (3).svg" alt='img' width={126} height={80}/>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-[14px] text-blue-950 font-josifin'>Duis lectus est.</h1>
                                <h1 className='text-[12px] text-gray-300 font-josifin'>$12.00 - $15.00</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col space-y-5'>
                    <div>
                        <h1 className='text-[22px] font-josifin font-bold'>Follow</h1>
                    </div>

                    <div className='flex '>
                        <Image src="/images/Blogs/Group 213.svg" alt='img' width={103} height={25}/>
                    </div>
                </div>

                <div className='flex flex-col space-y-5'>
                    <div>
                        <h1 className='text-[22px] font-josifin font-bold'>Tags</h1>
                    </div>

                    <div className='flex space-x-5'>
                        <p className='text-[16px] text-blue-950 font-josifin'>General</p>
                        <p className='text-[16px] text-pink-500 font-josifin'>Atsanil</p>
                        <p className='text-[16px] text-blue-950 font-josifin'>Insas.</p>
                    </div>
                    <div className='flex space-x-5'>
                        <p className='text-[16px] text-blue-950 font-josifin'>Bibsaas</p>
                        <p className='text-[16px] text-blue-950 font-josifin'>Nulla.</p>
                        
                    </div>
                </div>
            </div>
        </div>

        <div className='flex justify-center items-center my-10 space-x-10 '>
            <div className='bg-pink-500 w-[32px] h-[24px] text-white flex justify-center items-center '>1</div>
            <div className='bg-white border border-gray-300 w-[32px] h-[24px] flex justify-center items-center text-gray-300   '>2</div>
            <div className='bg-white border border-gray-300 w-[32px] h-[24px] flex justify-center items-center text-gray-300 '>3</div>
            <div className='bg-white border border-gray-300 w-[32px] h-[24px] flex justify-center items-center text-gray-300 '>4</div>
        </div>

            <div className='flex justify-center items-center my-40'>
                <Image src="/images/image 1174.svg" alt='img' width={904} height={93}/>
            </div>
        
    </div>
  )
}

export default BlogsHero
