import { useState } from 'react';
import { NavLink } from 'react-router';// your links array
import { links } from '../../data';
import AnimatedBorder from './animated-border';

const NavLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='hidden md:flex items-center gap-8 font-medium'>
      <ul className='flex gap-8'>
        {links.map((link) =>
          link.dropdown ? (
            <li
              key={link.title}
              className='relative'
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => {
                setTimeout(() => setOpen(false), 300);
              }}
            >
              <button className='cursor-pointer transition'>
                {link.title}
              </button>

              {open && (
                <div className='absolute -left-8 top-full bg-card shadow-lg rounded-xl w-48 z-50 p-4'>
                  {link.dropdown.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded transition text-sm ${
                          isActive ? 'text-brand font-semibold' : 'text-primary'
                        }`
                      }
                    >
                      <span className='relative group'>
                        {sub.title}
                       <AnimatedBorder/>
                      </span>
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          ) : (
            <li key={link.path}>
              <NavLink
                to={link.path}
                target={link.title === 'Blogs' ? '_blank' : '_self'}
                className={({ isActive }) =>
                  `transition ${
                    isActive ? 'text-brand font-bold' : 'text-primary'
                  } group relative px-[2px]`
                }
              >
                {link.title}
                <span className='absolute -bottom-1 h-[2px] bg-primary w-0 left-0 group-hover:w-full hover:-left-8 transition-all duration-300 ease-in-out'></span>
              </NavLink>
            </li>
          )
        )}
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavLinks;
