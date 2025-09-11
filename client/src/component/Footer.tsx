import { FaGithub, FaLinkedin } from '../data/icons';


const Footer = () => {
  return (
    <footer className='bg-navbar text-muted h-20 flex-center'>
      <div className='boundary flex flex-col md:flex-row items-center justify-between gap-4'>
        {/* Left: copyright */}
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} AI Analyzer. All rights reserved.
        </p>

        {/* Right: social / links */}
        <div className='flex gap-4'>
          <a
            href='https://github.com/dev-rashedin'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary transition'
          >
            <FaGithub className='w-5 h-5' />
          </a>
          <a
            href='https://www.linkedin.com/in/dev-rashedin'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary transition'
          >
            <FaLinkedin className='w-5 h-5' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
