import Link from 'next/link';
import { navLinks } from '../../data/navbarLinks';
import Image from 'next/image';
import logo from '../../../public/logo.png';


const MobileNavbar = () => {
    return (
        <nav className='mobile'>
            <div className='navbar'>
                <div class="nav-container">
                    <div className='logo'>
                        <Link href='/'>
                        <Image 
                            src={logo}
                            height={28}
                            alt='logo'
                        />
                        </Link >
                    </div>
                    <input class="checkbox" type="checkbox" name="" id="" />
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                    <ul className='menu-items'>
                        {navLinks.map((link, index) => {
                            return (
                                <Link key={index} href={link.path}>
                                    <li key={index}>{link.name}</li>
                                </Link>
                        )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default MobileNavbar;