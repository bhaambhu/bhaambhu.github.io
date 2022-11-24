import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from './Sidebar'

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <>
            {/* Sidebar BG Blur */}
            {showSidebar && <div onTouchStart={() => setShowSidebar(!showSidebar)} className='z-10 h-screen w-screen fixed backdrop-blur-sm top-0 '>
            </div>}

            {/* Navbar */}
            <header id='navbar' className='z-10 flex left-0 top-0 items-center p-5 ml:flex-row ml:justify-between fixed w-full bg-white shadow-sm'>

                <div className=''>
                    <Link href='/'><a>
                        <Image alt='Bhaambhu Logo' width='32px' height='32px' src='/favicon.ico' />
                    </a></Link>
                </div>
                <nav className='ml:flex hidden font-semibold gap-6 mt-4 ml:mt-0 justify-between w-full ml:w-auto'>
                    <Link href='/#about'><a className='hover:text-red-500 transition duration-500' >About</a></Link>
                    <Link href='/#projects'><a className='hover:text-red-500 transition duration-500' >Projects</a></Link>
                    <Link href='/#contact'><a className='hover:text-red-500 transition duration-500' >Contact</a></Link>
                    <a className='text-red-500 text-sm font-bold font-mono tracking-widest outline py-1 px-2 rounded outline-2 hover:bg-red-200 transition duration-500' href=''>RESUMÉ</a>
                </nav>

                {/* Sidebar Toggle */}
                <div className='ml:hidden'>
                    {showSidebar ? (
                        <svg
                            onClick={() => setShowSidebar(!showSidebar)}
                            className="fixed z-50 flex items-center cursor-pointer right-5 top-6"
                            fill="white"
                            viewBox="0 0 100 80"
                            width="32"
                            height="32"
                        >
                            <rect width="100" height="10"></rect>
                            <rect y="30" x='20' width="80" height="10"></rect>
                            <rect y="60" x='40' width="60" height="10"></rect>
                        </svg>
                    ) : (
                        <svg
                            onClick={() => setShowSidebar(!showSidebar)}
                            className="fixed z-30 flex items-center cursor-pointer right-5 top-6"
                            fill="red"
                            viewBox="0 0 100 80"
                            width="32"
                            height="32"
                        >
                            <rect width="100" height="10"></rect>
                            <rect y="30" x='20' width="80" height="10"></rect>
                            <rect y="60" x='40' width="60" height="10"></rect>
                        </svg>
                    )}
                </div>



                {/* Sidebar */}
                <div
                    className={`top-0 drop-shadow-2xl right-0 w-[70vw] bg-red-500 p-10 text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                        }`}
                >
                    <nav className='flex flex-col font-semibold gap-10 mt-20 justify-between w-full h-[60vh] items-center'>
                        <Link href='/#about'><a className='hover:text-black transition duration-500' >About</a></Link>
                        <Link href='/#projects'><a className='hover:text-black transition duration-500' >Projects</a></Link>
                        <Link href='/#contact'><a className='hover:text-black transition duration-500' >Contact</a></Link>
                        <a className='text-white text-sm font-bold font-mono tracking-widest outline py-2 px-4 rounded outline-2 hover:bg-black transition duration-500' href=''>RESUMÉ</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar