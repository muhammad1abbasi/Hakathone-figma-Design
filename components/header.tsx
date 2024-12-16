import Image from "next/image";
import Link from "next/link";

import React from "react";

const Header = () => {
  return (
    <div className="h-16 max-w-full mx-auto">
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col sm:flex-row sm:space-x-28 ">
          <div className="flex my-3 space-x-32">
            <h1 className="text-[30px] text-blue-950 font-josifin font-bold ">Hekto</h1>

            <div className="sm:hidden flex items-center">
          <div className="cursor-pointer">
            <div className="w-6 h-0.5 bg-blue-950 mb-1"></div>
            <div className="w-6 h-0.5 bg-blue-950 mb-1"></div>
            <div className="w-6 h-0.5 bg-blue-950"></div>
          </div>
        </div>
          </div>

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

          <ul className="sm:flex space-x-1 sm:space-x-5 mt-3 hidden">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/gridpage">Products Featured</Link>
            </li>
            <li>
              <Link href="/Login">Login</Link>
            </li>
            <li>
              <Link href="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link href="/productDetails">Products Details</Link>
            </li>
            <li>
              <Link href="/Blog">Blogs</Link>
            </li>
            <li>
              <Link href="/ContactUs">Contact</Link>
            </li>
            <li>
              <Link href="/HektoDemo">Hekto Features</Link>
            </li>
            <li>
              <Link href="/ShopleftBar">Shop Detailes</Link>
            </li>
            <li>
              <Link href="/OrderComplete">Order Successfully Arrived</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="bg-pink-500 w-auto h-auto px-3 py-2  rounded hidden sm:block ">
            <Image src="/images/search.svg" alt="igm" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
