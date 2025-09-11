import { Link } from 'react-router';
import { services } from '../data';



const Home = () => {
  return (
    <div className='space-y-16'>
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
          <Link
            key={s.path}
            to={s.path}
            className='p-6 rounded-2xl shadow flex border   border-primary group relative text-primary hover:text-white bg-card'
          >
            <span className='absolute rounded-2xl left-0 top-0 h-full w-0 bg-primary transition-all duration-500 ease-in-out group-hover:w-full'></span>
            <div className='z-20 flex flex-col space-y-2'>
              {<s.icon className='w-8 h-8 hover:text-white' />}
              <h2 className='text-xl font-semibold'>{s.title}</h2>
              <p className='text-sm text-muted'>{s.desc}</p>
            </div>
          </Link>
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
