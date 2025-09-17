import { Link } from 'react-router';
import NavLinks from './ui/navLink';
import MobileMenu from './ui/MobileMenu';
import ThemeSwitcher from './ui/ThemeSwitcher';
import Blob from './ui/Blob';

const Navbar = () => {
  return (
    <main className='bg-navbar sticky top-0 w-full h-20 flex-center bg-navbar/10 z-50 '>
      <nav className='flex-between boundary'>
        <Blob/>
        <Link
          to='/'
          className='flex gap-2 items-center cursor-pointer font-logo text-brand w-60'
        >
          <img src='/logo.png' alt='logo' className='w-10 h-10 -mt-1' />
          <h1 className='text-2xl font-bold mt-1'>DevScribe AI</h1>
        </Link>

        {/* links */}
        <NavLinks />

        {/* theme switcher */}
        <div className='hidden lg:block mt-[6px]'>
          <ThemeSwitcher />
        </div>

        {/* mobile menu */}
        <MobileMenu />
      </nav>
    </main>
  );
};

export default Navbar;
