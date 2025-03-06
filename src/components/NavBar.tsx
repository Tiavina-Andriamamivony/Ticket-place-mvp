"use client"

import Link from 'next/link';
import { Input } from './ui/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';
import { useState } from 'react';


const NavBar = () => {
    const [predica, setPredica] = useState("");
    return (
        <nav className="bg-gray-800 p-4 w-auto flex items-center gap-3">
            <div className="container mx-auto flex items-center gap-3">
                <Link href="/" className="text-3xl text-white font-bold">
                    Logo
                </Link>
                <div className="flex items-center space-x-2">
                <Input type="text" className="px-3 py-2 w-80 text-white font-semibold" placeholder="Search..." value={predica} onChange={(e) => setPredica(e.target.value)} />
                <Button className="px-3 py-2">
                    <Link href={`/events/event/search/${predica}`}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                </Button>
                </div>

                


            </div>
            <div className="flex items-center gap-3 w-2/3 mr-3">
                    <Link href="/login" className="text-white p-3 rounded-lg hover:bg-gray-200 hover:text-black transition-all duration-300  ">
                        Login
                    </Link>
                    <Link href="/events" className="text-white p-3 rounded-lg hover:bg-gray-200 hover:text-black transition-all duration-300  ">
                        Home
                    </Link>
                    <Link href="/createEvent" className="text-white p-3 rounded-lg hover:bg-gray-200 hover:text-black transition-all duration-300  ">
                        Create event 
                    </Link>
                </div>
        </nav>
    );
};

export default NavBar;