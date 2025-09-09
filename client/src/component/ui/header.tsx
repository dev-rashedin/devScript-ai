import { Link } from "react-router";

const Header = () => {
  return (
    <Link to='/' className='flex gap-2 items-center w-full max-w-4xl mb-6 py-6 cursor-pointer'>
      <img src='/logo.png' alt='logo' className='w-12 h-12' />
      <h1 className='text-2xl font-bold'>AI Analyzer</h1>
    </Link>
  );
};

export default Header;
