import { Link } from 'react-router';
import { services } from '../data';



const Home = () => {
  return (
    <div className=''>
      {/* Hero Section */}

      <section className='text-center max-w-3xl mx-auto py-16 space-y-6'>
        <h1 className='text-4xl md:text-5xl font-bold'>
          Understand, Summarize, and Write Smarter with AI
        </h1>
        <p className='text-lg text-muted'>
          One place to explain code, summarize documents, or generate content —
          designed for developers and writers alike.
        </p>
      </section>

      {/* Services Cards Section */}
      <section className='max-w-6xl mx-auto grid gap-6 md:grid-cols-3'>
        {services.map((s) => (
          <div
            key={s.path}
            className='p-6 rounded-2xl shadow flex border border-r-4 border-b-4   border-primary group  bg-card'
          >
            <div className='text-primary flex flex-col space-y-2'>
              {<s.icon className='w-8 h-8 hover:text-white' />}
              <h2 className='text-xl font-semibold'>{s.title}</h2>
              <p className='text-sm text-muted'>{s.desc}</p>

              <Link
                to={s.path}
                className=' border w-36 text-center rounded-full p-1 mt-2 relative hover:text-white flex justify-center hover:transform-y-1'
              >
                <span className='absolute rounded-2xl left-0 top-0 h-full w-0 bg-primary transition-all duration-500 ease-in-out group-hover:w-full'></span>
                <span className='text-black group-hover:text-white z-50'>
                  {' '}
                  Check it here
                </span>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section className='max-w-4xl mx-auto text-center space-y-6 py-16'>
        <h2 className='text-3xl font-bold'>Why use AI Analyzer?</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='p-8 bg-card rounded-xl shadow'>
            ✅ Save time on explanations and writing
          </div>
          <div className='p-8 bg-card rounded-xl shadow'>
            ✅ Reduce errors & confusion in code
          </div>
          <div className='p-8 bg-card rounded-xl shadow'>
            ✅ Simplify documentation & note-taking
          </div>
          <div className='p-8 bg-card rounded-xl shadow'>
            ✅ Professional-ready output for portfolio / resume
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
