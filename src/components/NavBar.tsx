import Link from 'next/link';
import { Input } from './ui/input';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <a className="text-3xl text-white font-bold">Logo</a>
                </Link>
                <div className="flex items-center">
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 rounded-md"
                    />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;