import Link from "next/link"
import Image from "next/image";

export default function Navbar() {
    return (
        

<nav className="bg-ab-accent">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">AB</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        {/* Change this for a real icon */}
        {/* Add logic in for this */}
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                    <Link href={'https://example.com'} className="hover:text-white hover:bg-black px-4 py-2 transition-colors duration-200 ease-in-out"> Past Work</Link>
                    <Link href={'https://example.com'} className="hover:text-white hover:bg-black px-4 py-2 transition-colors duration-200 ease-in-out"> My Services</Link>
                    <Link href={'https://example.com'} className="hover:text-white hover:bg-black px-4 py-2 transition-colors duration-200 ease-in-out"> About</Link>
                    <Link href={'https://example.com'} className="hover:text-white hover:bg-black px-4 py-2 transition-colors duration-200 ease-in-out"> Book Me</Link> 
      </ul>
    </div>
  </div>
</nav>

        // <nav classNameName="bg-ab-accent flex justify-between items-center p-4">
        //     <div classNameName="flex items-center">
        //         {/* Icon on left side */}
        //         <div classNameName="flex items-center">AB</div>
        //         {/* Tabs on right side */}
        //         <div classNameName="flex gap-4 font-bold">
                    // <Link href={'https://example.com'}> Past Work</Link>
                    // <Link href={'https://example.com'}> My Services</Link>
                    // <Link href={'https://example.com'}> About</Link>
                    // <Link href={'https://example.com'}> Book Me</Link>         
        //         </div>
        //     </div>

        // </nav>
        
    )
}