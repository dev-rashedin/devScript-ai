import { Link } from 'react-router';
import { useTheme } from '../hooks/useTheme';
import { FiMoon } from 'react-icons/fi';
import { IoSunnyOutline } from 'react-icons/io5';
import NavLinks from './ui/navlinks';

const Navbar = () => {
  const { dark, toggleDark } = useTheme();

  return (
    <main className='bg-navbar h-20 flex items-center sticky top-0 shadow z-20'>
      <nav className='flex-between boundary'>
        <Link
          to='/'
          className='flex items-center cursor-pointer font-logo text-brand w-60'
        >
          <img src='/logo.png' alt='logo' className='w-20 h-20' />
          <h1 className='text-2xl font-bold -ml-2'>AI Analyzer</h1>
        </Link>

        {/* links */}
      <NavLinks/>

        {/* theme switcher */}
        <button onClick={toggleDark} className='cursor-pointer'>
          {dark ? (
            <FiMoon className='text-xl' />
          ) : (
            <IoSunnyOutline className='text-xl' />
          )}
        </button>
      </nav>
    </main>
  );
};

export default Navbar;
