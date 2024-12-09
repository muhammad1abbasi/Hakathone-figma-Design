import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const Header = () => {
  return (
    <div className='h-16 max-w-full mx-auto'>
        <div className='flex justify-evenly items-center'>
            <div className='flex flex-col sm:flex-row sm:space-x-28 '>
            <Image src="/images/Hekto.svg" alt='igm' width={98} height={34}/>
             {/* <ul className='sm:flex space-x-1 sm:space-x-3 mt-3 hidden'>
                <li className='text-red-500 flex'>Home
                <Image src="/images/redarrowdown.svg" alt='igm' width={12} height={12}/>
                </li>
                
                <li> Pages</li>
                <li>Products</li>
                <li>Blog </li>
                <li>Shop</li>
                <li>Contact</li>
             </ul> */}


<ul className='sm:flex space-x-1 sm:space-x-5 mt-3 hidden'>
        <li>
          <Link href="/gridpage">
            Grid Products Page
          
          </Link>
        </li>
        <li>
          <Link href="/Login">
            Login
          </Link>
        </li>
        <li>
          <Link href="/norend">
            404 Trouble
          </Link>
        </li>
        <li>
          <Link href="/productDetails">
            Products Details
          </Link>
        </li>
      </ul>

            </div>

            <div>
                <div className='bg-pink-500 w-auto h-auto px-3 py-2  rounded hidden sm:block '>
                <Image src="/images/search.svg" alt='igm' width={24} height={24} />

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Header
