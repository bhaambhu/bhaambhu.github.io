import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import { NavbarProps } from '../config/interfaces'
import Link from 'next/link'

// What the logo (an × and an ○) might be, shown one at a time on tap.
const LOGO_LINES = [
    'xo: it’s just tic-tac-toe!',
    'xo: it’s the game controller.',
    'It’s a telescope!',
    'xo: Resembles someone who’s lost an eye.',
    'xo: a hug and a kiss, from me to you.',
    'xo: × marks the spot. ○ is the treasure.',
    'xo: Close and open: the two buttons every app needs.',
    'xo: Wrong and right. I fix the first one for a living.',
    'A robot that just woke up.',
    'It’s a B. For Bhaambhu, obviously.',
]

const Navbar = ({ showResumeButton = true, ...props}: NavbarProps) => {
    const [showSidebar, setShowSidebar] = useState(false)

    // The section heading most recently scrolled under the navbar, shown as
    // the last breadcrumb; null above the first heading.
    const [section, setSection] = useState<{ name: string; el: HTMLElement } | null>(null)
    useEffect(() => {
        let frame = 0
        const update = () => {
            frame = 0
            const navBottom = document.getElementById('navbar')?.getBoundingClientRect().bottom ?? 72
            let current: { name: string; el: HTMLElement } | null = null
            const headings = Array.from(document.querySelectorAll<HTMLElement>('[data-section-heading]'))
            headings.forEach(el => {
                if (el.getBoundingClientRect().top < navBottom) {
                    current = { name: el.dataset.sectionHeading ?? '', el }
                }
            })
            // The last section can be too short to scroll its heading under
            // the navbar, so reaching the bottom of the page counts as being in it.
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
            const last = headings[headings.length - 1]
            if (atBottom && last && window.scrollY > 0) {
                current = { name: last.dataset.sectionHeading ?? '', el: last }
            }
            setSection(prev => (prev?.name === (current as { name: string } | null)?.name ? prev : current))
        }
        const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
            cancelAnimationFrame(frame)
        }
    }, [])

    // Easter egg: on the homepage at the very top (nothing after the logo), a
    // tap on the logo spins it once and offers a guess at what it is. Every
    // line shows once, in a shuffled order, before any repeats. Taps do
    // nothing until the current line has fully faded away.
    const QUIP_FADE_MS = 300
    const [logoSecret, setLogoSecret] = useState<string | null>(null)
    const [quipShown, setQuipShown] = useState(false)
    const [logoSpinning, setLogoSpinning] = useState(false)
    const quipBusy = useRef(false)
    const logoQueue = useRef<string[]>([])
    const logoHide = useRef<ReturnType<typeof setTimeout>>()
    const atHomeTop = !props.title && !section
    const showLogoSecret = () => {
        if (quipBusy.current) return
        quipBusy.current = true
        if (logoQueue.current.length === 0) {
            logoQueue.current = [...LOGO_LINES].sort(() => Math.random() - 0.5)
        }
        setLogoSecret(logoQueue.current.shift() ?? null)
        setQuipShown(true)
        setLogoSpinning(true)
    }

    // Hover lightens the logo; a press returns it to normal until the pointer
    // leaves and comes back.
    const [logoHovered, setLogoHovered] = useState(false)
    const [logoPressed, setLogoPressed] = useState(false)
    const logoLight = logoHovered && !logoPressed

    // A line too long for the navbar (phones) scrolls sideways once; it stays
    // up until the scroll has finished, plus a moment to read the end, then
    // fades out before another tap is accepted.
    const quipBox = useRef<HTMLSpanElement>(null)
    const quipText = useRef<HTMLSpanElement>(null)
    const [quipScroll, setQuipScroll] = useState(0)
    useLayoutEffect(() => {
        clearTimeout(logoHide.current)
        if (!logoSecret) { setQuipScroll(0); return }
        const overflow = Math.max(0, (quipText.current?.scrollWidth ?? 0) - (quipBox.current?.clientWidth ?? 0))
        setQuipScroll(overflow)
        const scrollMs = overflow ? 600 + (overflow / 45) * 1000 : 0
        logoHide.current = setTimeout(() => {
            setQuipShown(false)
            logoHide.current = setTimeout(() => {
                setLogoSecret(null)
                quipBusy.current = false
            }, QUIP_FADE_MS)
        }, 2800 + scrollMs)
    }, [logoSecret])

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
            {/* Above all page content (the portrait, a lifted card), so nothing scrolls over it. */}
            <header id='navbar' className='print:hidden ease-in-out duration-300 z-40 flex left-0 top-0 items-center p-5 fixed w-full bg-white shadow md:flex-row justify-between'>

                {/* Breadcrumbs: the logo leads home, then "/" and the page */}
                <div className='flex gap-3 items-center min-w-0 flex-1 mr-4 md:flex-none md:mr-0'>
                    {/* Grows a little on hover. */}
                    <button aria-label='Home' className='relative flex h-8 w-8'
                        onPointerEnter={() => setLogoHovered(true)}
                        onPointerLeave={() => { setLogoHovered(false); setLogoPressed(false) }}
                        onPointerDown={() => setLogoPressed(true)}
                        onClick={() => {
                            setShowSidebar(false);
                            if (atHomeTop) return showLogoSecret();
                            window.location.href = props.title ? "/" : "#";
                        }}>
                        {/* One full turn per guess, as an animation, so it never
                            spins back when the line fades. */}
                        <img alt='Bhaambhu Logo' width={32} height={32} src='/favicon.ico'
                            onAnimationEnd={() => setLogoSpinning(false)}
                            className={`absolute inset-0 transition-[filter] duration-150 ${logoLight ? 'brightness-125' : ''} ${logoSpinning ? 'logo-spin' : ''}`} />
                    </button>
                    {/* The logo's guess, right of it in the navbar (only at the top of
                        the homepage, where nothing else is shown there). */}
                    {logoSecret && <span ref={quipBox} aria-live='polite'
                        className={`crumb-in ml-2 min-w-0 flex-1 overflow-hidden transition-opacity duration-300 ${quipShown ? 'opacity-100' : 'opacity-0'}`}>
                        <span ref={quipText} key={logoSecret}
                            className={`inline-block whitespace-nowrap font-mono text-sm md:text-base font-bold tracking-wide text-primary-500 ${quipScroll ? 'logo-quip-scroll' : ''}`}
                            style={quipScroll ? ({ '--quip-shift': `-${quipScroll}px`, '--quip-time': `${(quipScroll / 45).toFixed(2)}s` } as React.CSSProperties) : undefined}>
                            {logoSecret}
                        </span>
                    </span>}
                    {/* On phones a page title gives way to the section, so the
                        breadcrumb stays one line beside the menu button. */}
                    {props.title && <span className={`${section ? 'hidden md:flex' : 'flex'} items-center gap-3`}>
                        <span aria-hidden className='font-mono text-2xl text-gray-300 select-none'>/</span>
                        <button onClick={() => {
                            setShowSidebar(false);
                            window.location.href = "#";
                        }} className='font-mono font-bold text-[26px] tracking-wider leading-8 text-gray-800'>
                            {props.title}
                        </button>
                    </span>}
                    {section && <span key={section.name} className='crumb-in flex items-center gap-3 min-w-0'>
                        <span aria-hidden className='font-mono text-2xl text-gray-300 select-none'>/</span>
                        <button onClick={() => {
                            setShowSidebar(false);
                            window.scrollTo({ top: section.el.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' });
                        }} className={`font-mono font-bold tracking-wider truncate ${props.title ? 'text-lg md:text-xl text-gray-500' : 'text-lg md:text-[26px] text-gray-800'}`}>
                            {section.name}
                        </button>
                    </span>}
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