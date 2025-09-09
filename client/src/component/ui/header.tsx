import { Link } from "react-router";
import { useTheme } from "../../hooks/useTheme";

const Header = () => {

   const { dark, toggleDark, primaryColor, setPrimaryColor } = useTheme();

  return (
    <nav>
      <Link
        to='/'
        className='flex gap-2 items-center w-full max-w-4xl mb-6 py-6 cursor-pointer font-logo'
      >
        <img src='/logo.png' alt='logo' className='w-12 h-12' />
        <h1 className='text-2xl font-bold'>AI Analyzer</h1>
      </Link>

      <div className='p-4'>
        <button
          onClick={toggleDark}
          className='mb-4 px-4 py-2 bg-primary text-white rounded'
        >
          Toggle Dark
        </button>

        <input
          type='color'
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
          className='mb-4'
        />

        <h1
          className='text-4xl'
          style={{
            fontFamily: 'var(--heading-font)',
            color: 'var(--primary-color)',
          }}
        >
          AI Analyzer
        </h1>

        <p className='text-lg' style={{ fontFamily: 'var(--body-font)' }}>
          Analyze code, summarize docs, and more.
        </p>
      </div>
    </nav>
  );
};

export default Header;
