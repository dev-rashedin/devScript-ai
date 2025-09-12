import { useState } from 'react';
import { socialLinks } from '../../data';
import AnimatedBorder from './animated-border';

const ContactDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className='relative'
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setTimeout(() => setOpen(false), 200)}
    >
      <button className='cursor-pointer transition py-1'>
        Contact ⏷
        <AnimatedBorder />
      </button>

      {open && (
        <div className='absolute left-0 top-full bg-card shadow-lg rounded-xl w-40 z-50 p-4 flex flex-col gap-2'>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.href}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-2 py-1 rounded hover:text-brand transition relative group text-primary text-sm'
              >
                <Icon className='w-5 h-5' />
                <span className='relative group'>
                  {social.title}
                  <AnimatedBorder />
                </span>
              </a>
            );
          })}
        </div>
      )}
    </li>
  );
};

export default ContactDropdown;
