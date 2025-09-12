import { Link, NavLink } from 'react-router';
import { useTheme } from '../hooks/useTheme';
import { FiMoon } from 'react-icons/fi';
import { IoSunnyOutline } from 'react-icons/io5';

const Navbar = () => {
  const { dark, toggleDark } = useTheme();

  return (
    <main className='bg-navbar h-20 flex items-center sticky top-0 shadow'>
      <nav className='flex-between boundary'>
        <Link
          to='/'
          className='flex items-center cursor-pointer font-logo text-primary'
        >
          <img src='/logo.png' alt='logo' className='w-20 h-20' />
          <h1 className='text-2xl font-bold -ml-2'>AI Analyzer</h1>
        </Link>

        {/* links */}
        <div className='hidden md:flex items-center gap-8 font-medium relative'>
          <NavLink to='/' className='hover:text-primary transition'>
            Home
          </NavLink>
          <NavLink to='/get-started' className='hover:text-primary transition'>
            Get Started
          </NavLink>

          {/* Services Dropdown */}
          <div className='group relative'>
            <span className='cursor-pointer hover:text-primary transition'>
              Services
            </span>
            <div className='absolute left-0 top-full mt-2 hidden group-hover:block bg-card shadow-lg rounded-xl w-56 py-2'>
              <NavLink
                to='/code-explainer'
                className='block px-4 py-2 hover:bg-primary/10 transition'
              >
                Code Explainer
              </NavLink>
              <NavLink
                to='/summarizer'
                className='block px-4 py-2 hover:bg-primary/10 transition'
              >
                Doc Summarizer
              </NavLink>
              <NavLink
                to='/writer'
                className='block px-4 py-2 hover:bg-primary/10 transition'
              >
                Article Writer
              </NavLink>
              <NavLink
                to='/code-refactor'
                className='block px-4 py-2 hover:bg-primary/10 transition'
              >
                Code Refactor
              </NavLink>
              <NavLink
                to='/email-helper'
                className='block px-4 py-2 hover:bg-primary/10 transition'
              >
                Email Helper
              </NavLink>
              <NavLink
                to='/resume-assistant'
                className='block px-4 py-2 hover:bg-primary/10 transition'
              >
                Resume Assistant
              </NavLink>
            </div>
          </div>

          <NavLink to='/blogs' className='hover:text-primary transition'>
            Articles
          </NavLink>
          <NavLink to='/login' className='hover:text-primary transition'>
            Login
          </NavLink>
        </div>

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
