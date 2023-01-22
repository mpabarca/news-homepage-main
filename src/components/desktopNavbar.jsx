import { navLinks } from '../data/navbarLinks';
import Link from 'next/link';
import { Logo } from './logo';

const DesktopNavbar = () => {
    return (
        <nav>
            <div className='logo'>
                <Link href='/'>
                    <Logo />
                </Link >
            </div>
            <ul className='menu'>
                {navLinks.map((link, index) => {
                    return (
                        <Link key={index} href={link.path}>
                            <li key={index}>{link.name}</li>
                        </Link>
                )
                })}
            </ul>
        </nav>
    )
};

export default DesktopNavbar;