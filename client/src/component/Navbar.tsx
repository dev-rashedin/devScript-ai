import { Link } from 'react-router';
import { useTheme } from '../hooks/useTheme';
import { FiMoon } from 'react-icons/fi';
import { IoSunnyOutline } from 'react-icons/io5';

const Navbar = () => {
  const { dark, toggleDark } = useTheme();

  return (
    <main className='bg-navbar h-20 flex items-center sticky top-0'>
      <nav className='flex-between boundary'>
        <Link
          to='/'
          className='flex gap-2 items-center cursor-pointer font-logo'
        >
          <img src='/logo.png' alt='logo' className='w-12 h-12' />
          <h1 className='text-2xl font-bold'>AI Analyzer</h1>
        </Link>

        <button
          onClick={toggleDark}
          className=' p-1 rounded-full cursor-pointer'
        >
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
