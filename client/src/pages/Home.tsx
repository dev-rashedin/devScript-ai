import { Link } from 'react-router';

const services = [
  {
    title: 'Code Explainer',
    desc: 'Understand code in plain language',
    path: '/code-explainer',
  },
  {
    title: 'Summarizer',
    desc: 'Summarize long documents fast',
    path: '/summarizer',
  },
  { title: 'Writer', desc: 'Generate articles & blogs', path: '/writer' },
];

const Home = () => {
  return (
    <div className='grid gap-6 md:grid-cols-3 min-h-[80vh] flex-center'>
      {services.map((s) => (
        <Link
          key={s.path}
          to={s.path}
          className='p-8 rounded-2xl shadow-md bg-card hover:shadow-lg transition text-primary'
        >
          <h2 className='text-xl font-semibold'>{s.title}</h2>
          <p className='text-sm opacity-85 mt-1'>{s.desc}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;
