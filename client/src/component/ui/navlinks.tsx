// NavLinks.tsx
import { useState } from 'react';
import { NavLink } from 'react-router';// your links array
import { links } from '../../data';

const NavLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='hidden md:flex items-center gap-8 font-medium'>
      {links.map((link) =>
        link.dropdown ? (
          <div
            key={link.title}
            className='relative'
            onMouseEnter={() => setOpen(true)}
        
          >
            <button className='cursor-pointer transition'>
              {link.title}
            </button>

            {open && (
              <div className='absolute left-0 top-full mt-1 bg-card shadow-lg rounded-xl w-56 py-1 z-50'>
                {link.dropdown.map((sub) => (
                  <NavLink
                    key={sub.path}
                    to={sub.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded transition hover:text-primary ${
                        isActive
                          ? 'text-brand font-semibold'
                          : 'text-primary'
                      }`
                    }
                  >
                    {sub.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ) : (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? 'text-brand text-lg'
                  : 'text-primary'
              }`
            }
          >
            {link.title}
          </NavLink>
        )
      )}
    </div>
  );
};

export default NavLinks;
