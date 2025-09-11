import { Link } from 'react-router';
import { FiCode, FiFileText, FiPenTool } from 'react-icons/fi';

const services = [
  {
    title: 'Code Explainer',
    desc: 'Paste your code and get an easy-to-understand explanation.',
    icon: <FiCode className='w-8 h-8 text-primary' />,
    path: '/code-explainer',
  },
  {
    title: 'Doc Summarizer',
    desc: 'Summarize long documents or articles in seconds.',
    icon: <FiFileText className='w-8 h-8 text-primary' />,
    path: '/summarizer',
  },
  {
    title: 'Article Writer',
    desc: 'Generate professional articles, blogs, or notes effortlessly.',
    icon: <FiPenTool className='w-8 h-8 text-primary' />,
    path: '/writer',
  },
];

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
        <div className='flex flex-col md:flex-row justify-center gap-4 mt-6'>
          <Link
            to='/code-explainer'
            className='px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition'
          >
            Try Code Explainer
          </Link>
          <Link
            to='/summarizer'
            className='px-6 py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-white transition'
          >
            Try Summarizer
          </Link>
          <Link
            to='/writer'
            className='px-6 py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-white transition'
          >
            Try Writer
          </Link>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className='max-w-6xl mx-auto grid gap-6 md:grid-cols-3'>
        {services.map((s) => (
          <Link
            key={s.path}
            to={s.path}
            className='p-6 rounded-2xl shadow bg-card hover:shadow-lg transition flex flex-col items-start space-y-4'
          >
            {s.icon}
            <h2 className='text-xl font-semibold'>{s.title}</h2>
            <p className='text-sm text-muted'>{s.desc}</p>
          </Link>
        ))}
      </section>

      {/* Benefits Section */}
      <section className='max-w-4xl mx-auto text-center space-y-6 py-16'>
        <h2 className='text-3xl font-bold'>Why use AI Analyzer?</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='p-4 bg-card rounded-xl shadow'>
            ✅ Save time on explanations and writing
          </div>
          <div className='p-4 bg-card rounded-xl shadow'>
            ✅ Reduce errors & confusion in code
          </div>
          <div className='p-4 bg-card rounded-xl shadow'>
            ✅ Simplify documentation & note-taking
          </div>
          <div className='p-4 bg-card rounded-xl shadow'>
            ✅ Professional-ready output for portfolio / resume
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
