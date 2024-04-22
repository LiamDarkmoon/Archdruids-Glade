import Link from 'next/link';
import Image from "next/image";

const NavBar = () => {

    return (
        <header className='absolute top-0 left-0 right-0 py-5 px-14 text-amber-50'>
            <nav className="flex sm:justify-between justify-center items-center">
                <Link
                    href="/"
                    className='flex flex-col sm:flex-row gap-2 items-center italic font-bold text-2xl sm:text-lg hover:text-amber-700 transition-colors duration-300'
                >
                    <Image
                        src="/archdruid.png"
                        alt="Brand Logo"
                        height={70}
                        width={70}
                    />
                    <span className='align-middle'>
                        Archdruid&apos;s Glade
                    </span>
                </Link>
                <ul className='hidden sm:flex gap-3'>
                    <li className='font-semibold hover:text-amber-700 transition-colors duration-300'>
                        <Link href="/about">About</Link>
                    </li>
                    <li className='font-semibold hover:text-amber-700 transition-colors duration-300'>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className='font-semibold hover:text-amber-700 transition-colors duration-300'>
                        <Link href="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
