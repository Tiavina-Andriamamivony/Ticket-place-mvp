"use client"

import Link from 'next/link';
import { Input } from './ui/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';
import { useState } from 'react';
import ModeToggle from './themeButton';
import { useTheme } from 'next-themes';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const NavBar = () => {
    const [predica, setPredica] = useState("");
    const { theme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={`p-4 w-full flex flex-wrap items-center gap-3 sticky top-0 z-50 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'}`}>
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
                <Link href="/" className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    Logo
                </Link>
                <div className="flex flex-wrap items-center space-x-2 w-full md:w-auto md:flex-1">
                    <Input type="text" className={`px-3 py-2 w-full md:w-30 lg:w-80 font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`} placeholder="Search..." value={predica} onChange={(e) => setPredica(e.target.value)} />
                    <Button className="px-3 py-2">
                        <Link href={`/events/event/search/${predica}`}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Link>
                    </Button>
                </div>
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
                </button>
                <div className={`flex flex-col md:flex-row md:items-center gap-3 w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:block`}>
                    <Link href="/login" className={`p-3 rounded-lg transition-all duration-300 ${theme === 'dark' ? 'text-white hover:bg-gray-200 hover:text-black' : 'text-black hover:bg-gray-800 hover:text-white'}`}>
                        Login
                    </Link>
                    <Link href="/events" className={`p-3 rounded-lg transition-all duration-300 ${theme === 'dark' ? 'text-white hover:bg-gray-200 hover:text-black' : 'text-black hover:bg-gray-800 hover:text-white'}`}>
                        Home
                    </Link>
                    <Link href="/createEvent" className={`p-3 rounded-lg transition-all duration-300 ${theme === 'dark' ? 'text-white hover:bg-gray-200 hover:text-black' : 'text-black hover:bg-gray-800 hover:text-white'}`}>
                        Create event
                    </Link>

                    <ModeToggle />
                </div>
                <div className='w-fit h-fit p-3 m-3'>
            
            <SignedIn>
              <UserButton />
            </SignedIn>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;