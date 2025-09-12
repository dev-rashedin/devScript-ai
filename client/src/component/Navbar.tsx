import { Link } from 'react-router';
import NavLinks from './ui/navLink';
import MobileMenu from './ui/mobile-menu';
import ThemeSwitcher from './ui/theme-switcher';

const Navbar = () => {
  return (
    <main className='bg-navbar h-20 flex items-center sticky top-0 shadow z-20'>
      <nav className='flex-between boundary'>
        <Link
          to='/'
          className='flex items-center cursor-pointer font-logo text-brand w-60'
        >
          <img src='/logo.png' alt='logo' className='w-20 h-20' />
          <h1 className='text-2xl font-bold -ml-2'>DevScribe</h1>
        </Link>

        {/* links */}
        <NavLinks />

        {/* theme switcher */}
        <div className='hidden lg:block'>
          <ThemeSwitcher />
        </div>

        {/* mobile menu */}
        <MobileMenu />
      </nav>
    </main>
  );
};

export default Navbar;
