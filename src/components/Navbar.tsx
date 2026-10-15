import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import { NavbarProps } from '../config/interfaces'
import Link from 'next/link'

const Navbar = ({ showResumeButton = true, ...props}: NavbarProps) => {
    const [showSidebar, setShowSidebar] = useState(false)
    const [logoHovered, setLogoHovered] = useState(false)
    const [logoPressed, setLogoPressed] = useState(false)
    const showHollowLogo = logoHovered && !logoPressed

    // Easter egg: five quick taps on the logo (an × and an ○) spin it and say
    // what it is.
    const [logoSecret, setLogoSecret] = useState(false)
    const logoTaps = useRef<number[]>([])
    const countLogoTap = () => {
        const now = Date.now()
        logoTaps.current = [...logoTaps.current.filter(t => now - t < 2000), now]
        if (logoTaps.current.length >= 5) {
            logoTaps.current = []
            setLogoSecret(true)
            setTimeout(() => setLogoSecret(false), 4500)
        }
    }

    // Convert links array to elements
    let linkButtons = null;
    if (props.links) {
        linkButtons = props.links?.map(oneLink =>
            <button key={oneLink} onClick={() => {
                setShowSidebar(false);
                window.location.href = `#${oneLink}`;
            }} className='hover:text-primary-500 transition duration-500 uppercase pointer-events-auto'>{oneLink}</button>
        )
    }

    return (
        <>
            <Script src='../navbarScript.js' strategy="lazyOnload" />
            {/* Sidebar BG Blur */}
            {showSidebar && <div onTouchStart={() => setShowSidebar(!showSidebar)} className='z-10 h-screen w-screen fixed backdrop-blur-sm top-0 print:hidden'>
            </div>}

            {/* Navbar */}
            <header id='navbar' className='print:hidden ease-in-out duration-300 z-10 flex left-0 top-0 items-center p-5 fixed w-full bg-white shadow md:flex-row justify-between'>

                {/* Breadcrumbs: the logo leads home, then "/" and the page */}
                <div className='flex gap-3 items-center'>
                    {/* Hollow on hover; solid at rest. A press fills it and it
                        stays filled until the pointer leaves, so the next hover
                        shows the hollow version again. Both images are stacked
                        so swapping never shifts the layout. */}
                    <button aria-label='Home' className='relative flex h-8 w-8'
                        onPointerEnter={() => setLogoHovered(true)}
                        onPointerLeave={() => { setLogoHovered(false); setLogoPressed(false); }}
                        onPointerDown={() => setLogoPressed(true)}
                        onClick={() => {
                            setShowSidebar(false);
                            countLogoTap();
                            window.location.href = props.title ? "/" : "#";
                        }}>
                        <img alt='Bhaambhu Logo' width={32} height={32} src='/favicon.ico'
                            className={`absolute inset-0 transition-[opacity,transform] duration-700 ${showHollowLogo ? 'opacity-0' : 'opacity-100'} ${logoSecret ? 'rotate-[360deg]' : ''}`} />
                        <img alt='' aria-hidden width={32} height={32} src='/logo-hollow.png'
                            className={`absolute inset-0 transition-opacity duration-150 ${showHollowLogo ? 'opacity-100' : 'opacity-0'}`} />
                    </button>
                    {/* The logo's secret, just under the navbar. */}
                    <p aria-live='polite' className={`pointer-events-none fixed left-5 top-[76px] max-w-[300px] rounded bg-white/95 px-3 py-2 font-mono text-xs font-bold tracking-wide text-primary-500 shadow transition-all duration-300 ${logoSecret ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>
                        {logoSecret ? '× and ○: my logo is a game of tic-tac-toe. I’ve been making games since 2009.' : ''}
                    </p>
                    {props.title && <>
                        <span aria-hidden className='font-mono text-2xl text-gray-300 select-none'>/</span>
                        <button onClick={() => {
                            setShowSidebar(false);
                            window.location.href = "#";
                        }} className='font-mono font-bold text-[26px] tracking-wider leading-8 text-gray-800'>
                            {props.title}
                        </button>
                    </>}
                </div>


                {/* Nav Buttons for Desktop Layout */}
                <nav className='hidden font-semibold gap-6 mt-4 justify-between w-full md:w-auto md:flex md:mt-0'>
                    {linkButtons}
                    <ResumeButton showResumeButton={showResumeButton} />
                </nav>

                {/* Sidebar */}
                <div
                    className={`top-0 flex items-center drop-shadow-2xl pointer-events-none right-0 w-[60vw] bg-primary-500 p-10 text-white fixed h-full z-40 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                        }`}
                >
                    <nav className=' flex flex-col text-xl font-mono gap-10 justify-center w-full h-fit items-center'>
                        {linkButtons}
                        <ResumeButton showResumeButton={showResumeButton} forSidebar />
                    </nav>
                </div>

                {/* Sidebar Toggle Button */}
                <div className={`md:hidden ${(props.links && props.links.length > 0 ) ? '  ' : ' hidden '}`} >
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

function ResumeButton({forSidebar = false, showResumeButton = true}) {
    if(!showResumeButton) return <></>;
    if (forSidebar) {
        return (
            <Link href='/resume'><span className='cursor-pointer text-white text-sm font-bold font-mono tracking-widest outline py-2 px-4 mt-6 rounded outline-2 hover:bg-black transition duration-500 pointer-events-auto' >RESUMÉ</span></Link>
        )
    } else {
        return (
            <Link href='/resume'><span className='cursor-pointer text-primary-500 text-sm font-bold font-mono tracking-widest outline py-1 px-2 rounded outline-2 hover:bg-primary-200 transition duration-500' >RESUMÉ</span></Link>
        )
    }
}

export default Navbar