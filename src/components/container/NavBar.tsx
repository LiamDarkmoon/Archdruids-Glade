import Link from 'next/link';
import Image from "next/image";
import Button from '../pure/Btn';
import { login } from '@/lib/actions';

const NavBar = () => {

    return (
        <header className='absolute z-30 top-0 left-0 right-0 py-3 px-14 text-amber-50'>
            <nav className="flex sm:justify-between justify-center items-center gap-4">
                <Link
                    href="/"
                    className='flex flex-col sm:flex-row gap-2 items-center italic font-bold text-3xl sm:text-lg hover:text-amber-600 transition-colors duration-300'
                >
                    <Image
                        src="/TdL.png"
                        alt="Brand Logo"
                        height={75}
                        width={75}
                        priority
                        className='h-auto'
                    />
                    <span className='align-middle'>
                        El Templo del Lobo
                    </span>
                </Link>
                <Link
                    href="/combat"
                    className='hover:text-amber-600 transition-colors duration-300'
                >
                    Combate
                </Link>
            </nav>
        </header>
    );
}

export default NavBar;
