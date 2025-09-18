import { Link } from 'react-router';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { FiCode, FiEdit3, FiFileText, FiMail, FiPenTool, FiUserCheck, HiMiniArrowTopRightOnSquare } from '../data/icons';
import AnimatedBorder from './ui/AnimatedBorder';


const services = [
  {
    title: 'Code Explainer',
    desc: 'Paste your code and get a clear, in-depth explanation. Perfect for learning, debugging, and quickly understanding complex logic.',
    icon: FiCode,
    path: 'code-explainer',
    cta: 'Explain Code',
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        Code Explainer
      </div>
    ),
  },
  {
    title: 'Doc Summarizer',
    desc: 'Summarize documents or articles instantly. Ideal for saving time, extracting key points, and understanding content efficiently.',
    icon: FiFileText,
    path: 'doc-summarizer',
    cta: 'Summarize Now',
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white'>
        Doc Summarizer
      </div>
    ),
  },
  {
    title: 'Article Generator',
    desc: 'Generate professional articles, blogs, or notes effortlessly. Helps produce structured, creative, and engaging content quickly.',
    icon: FiPenTool,
    path: 'article-generator',
    cta: 'Generate Article',
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] text-white'>
        Article Generator
      </div>
    ),
  },
  {
    title: 'Code Refactor',
    desc: 'Improve and optimize your code without changing functionality. Enhances readability, reduces errors, and follows best practices.',
    icon: FiEdit3,
    path: 'code-refactor',
    cta: 'Refactor Code',
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        Code Refactor
      </div>
    ),
  },
  {
    title: 'Email Helper',
    desc: 'Draft clear, professional emails instantly without hassle. Perfect for concise, polite, and persuasive communication every time.',
    icon: FiMail,
    path: 'email-helper',
    cta: 'Draft Email',
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white'>
        Email Helper
      </div>
    ),
  },
  {
    title: 'Resume Assistant',
    desc: 'Polish your resume or cover letter with AI expertise. Ensures professional formatting, clear phrasing and strong impact.',
    icon: FiUserCheck,
    path: 'resume-assistant',
    cta: 'Improve Resume',
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] text-white'>
        Resume Assistant
      </div>
    ),
  },
];


const Services = () => {
  const [animationData, setAnimationData] = useState<unknown>(null);

  useEffect(() => {
    import('../assets/ai-animation.json').then((data) => {
      setAnimationData(data.default);
    });
  }, []);

  if (!animationData) return <div>Loading...</div>;

  return (
    <main id='services' className='w-full h-screen'>
      <h2 className='text-center mb-16'>Explore Our Services</h2>
      <div className=''>
        <section className='flex sticky top-0'>
          <div className='hidden lg:flex justify-end px-8 xl:px-16 items-center  lg:w-1/2 bg-blue-300 h-[90vh] w-[50vw]  '>
            <Lottie
              animationData={animationData}
              renderer='svg'
              style={{ height: '500px' }}
            />
          </div>
          <section className='w-1/2 max-w-4xl mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {services.map((s) => (
              <div
                key={s.path}
                className='p-6 rounded-2xl shadow flex border border-r-4 border-b-4 border-primary bg-card'
              >
                <div className='flex flex-col space-y-3'>
                  {<s.icon className='w-8 h-8' />}
                  <h2 className='text-xl font-semibold'>{s.title}</h2>
                  <p className='text-[15px] opacity-85'>{s.desc}</p>

                  <Link
                    to={`/services/${s.path}`}
                    className='flex items-center gap-2 rounded-full mt-1 relative group hover:transform-y-1'
                  >
                    <span className='relative'>
                      {s.cta}
                      <AnimatedBorder />
                    </span>
                    <HiMiniArrowTopRightOnSquare
                      height={20}
                      width={20}
                      className='opacity-75 text-lg transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:font-bold group-hover:opacity-100'
                    />
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </section>
      </div>
    </main>
  );
};
export default Services;
