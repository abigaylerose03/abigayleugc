import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
      <>
        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
            .navbar * {
                font-family: 'Anton', sans-serif;
            }
        `}
        </style>
        <nav className="bg-ab-accent navbar w-full sm:w-full">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4">
                <a href="https://example.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">AP</span>
                </a>
                <button 
                    data-collapse-toggle="navbar-default" 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-gray-300" 
                    aria-controls="navbar-default" 
                    aria-expanded="false"
                    onClick={toggleMenu}>
                    <span className="sr-only">Open main menu</span>
                    {/* Icon for the menu button */}
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <div className={`${
                    isMenuOpen ? 'flex' : 'hidden'
                } w-full md:flex md:w-auto`} id="navbar-default">
                    <ul className="flex flex-col p-4 md:flex-row md:space-x-8 rtl:md:space-x-reverse mt-4 md:mt-0 rounded-lg md:border-0 w-full">
                        <Link href={'/past-work'} className="hover:text-white hover:bg-black px-4 py-2 transition-colors duration-200 ease-in-out flex-grow text-center">Past Work</Link>
                        <Link href={'/services'} className="hover:text-white hover:bg-black px-4 py-2 transition-colors duration-200 ease-in-out flex-grow text-center">My Services</Link>
                        <Link href={'/about'} className="hover:text-white hover:bg-black px-4 py-2 transition-colors duration-200 ease-in-out flex-grow text-center">About</Link>
                        <Link href={'/book-me'} className="hover:text-white hover:bg-black px-4 py-2 transition-colors duration-200 ease-in-out flex-grow text-center">Book Me</Link> 
                    </ul>
                </div>
            </div>
        </nav>
      </>
    );
}
