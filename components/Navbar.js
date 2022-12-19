import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from './Sidebar'

const Navbar = ({ title = '', links }) => {
    const [showSidebar, setShowSidebar] = useState(false)

    // Convert links array to elements
    const linkButtons = links.map(oneLink =>
        <button key={oneLink} onClick={() => {
            setShowSidebar(false);
            window.location.href = `#${oneLink}`;
        }} className='hover:text-primary-500 transition duration-500 uppercase'>{oneLink}</button>
    )

    return (
        <>
            {/* Sidebar BG Blur */}
            {showSidebar && <div onTouchStart={() => setShowSidebar(!showSidebar)} className='z-10 h-screen w-screen fixed backdrop-blur-sm top-0 '>
            </div>}

            {/* Navbar */}
            <header id='navbar' className='ease-in-out duration-300 z-10 flex left-0 top-0 items-center p-5 fixed w-full bg-white shadow md:flex-row justify-between'>

                {/* Breadcrumbs */}
                <div className='flex gap-5 items-center'>
                    <button className='flex' onClick={() => {
                        setShowSidebar(false);
                        window.location.href = title ? "/" : "#";
                    }}>{title && <div className='font-mono font-semibold text-2xl tracking-wider mr-3 -ml-2 text-red-500'>
                        &lt;
                    </div>}
                        <Image alt='Bhaambhu Logo' width='32px' height='32px' src='/favicon.ico' />
                    </button>
                    {title && <button onClick={() => {
                        setShowSidebar(false);
                        window.location.href = "#";
                    }} className='font-mono font-bold text-[36px] tracking-widest leading-9 -mb-1 text-gray-800'>
                        {title}
                    </button>}
                </div>


                {/* Nav Buttons for Desktop Layout */}
                <nav className='hidden font-semibold gap-6 mt-4 justify-between w-full md:w-auto md:flex md:mt-0'>
                    {linkButtons}
                    <a className='text-primary-500 text-sm font-bold font-mono tracking-widest outline py-1 px-2 rounded outline-2 hover:bg-primary-200 transition duration-500' href='/resume.pdf'>RESUMÉ</a>
                </nav>

                {/* Sidebar */}
                <div
                    className={`top-0 flex items-center drop-shadow-2xl right-0 w-[60vw] bg-primary-500 p-10 text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                        }`}
                >
                    <nav className=' flex flex-col text-xl font-mono gap-10 justify-between w-full h-[30vh] items-center'>
                        {linkButtons}
                        <a className='text-white text-sm font-bold font-mono tracking-widest outline py-2 px-4 rounded outline-2 hover:bg-black transition duration-500' href='/resume.pdf'>RESUMÉ</a>
                    </nav>
                </div>

                {/* Sidebar Toggle Button */}
                <div className='md:hidden'>
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
                            className="z-30 flex items-center cursor-pointer right-5 top-6"
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
            </header>
        </>
    )
}

export default Navbar