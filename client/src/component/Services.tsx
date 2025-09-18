import { Link } from 'react-router';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { services } from '../data';
import { HiMiniArrowTopRightOnSquare } from '../data/icons';
import AnimatedBorder from './ui/AnimatedBorder';


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
        <section className='flex sticky top-20'>
          <div className='hidden lg:block lg:w-1/2 bg-blue-300 h-[90vh] w-[50vw] flex-center'>
            <Lottie
              animationData={animationData}
              renderer='svg'
              style={{ height: '600px' }}
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







