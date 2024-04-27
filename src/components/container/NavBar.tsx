import Link from 'next/link';
import Image from "next/image";
import Button from '../pure/Btn';
import { login } from '@/lib/actions';

const NavBar = () => {

    return (
        <header className='absolute z-30 top-0 left-0 right-0 py-3 px-14 text-amber-50'>
            <nav className="flex sm:justify-start justify-center items-center">
                <Link
                    href="/"
                    className='flex flex-col sm:flex-row gap-2 items-center italic font-bold text-2xl sm:text-lg hover:text-amber-600 transition-colors duration-300'
                >
                    <Image
                        src="/archdruid.png"
                        alt="Brand Logo"
                        height={50}
                        width={40}
                        priority
                        className='h-auto'
                    />
                    <span className='align-middle'>
                        Archdruid&apos;s Glade
                    </span>
                </Link>
            </nav>
        </header>
    );
}

export default NavBar;
