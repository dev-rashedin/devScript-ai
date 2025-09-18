import { Link } from 'react-router';
import Lottie from 'lottie-react';
import { useEffect, useRef, useState } from 'react';
import { services } from '../data';
import { HiMiniArrowTopRightOnSquare } from '../data/icons';
import AnimatedBorder from './ui/AnimatedBorder';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

const Services = () => {
  const [animationData, setAnimationData] = useState<unknown>(null);
  const [mounted, setMounted] = useState(false); // ✅ client-only flag
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const { scrollYProgress } = useScroll({
      container: containerRef.current,
      offset: ['start start', 'end start'],
    });

    return scrollYProgress.onChange((latest) =>
      setActiveIndexFromScroll(latest)
    );
  }, []);

  useEffect(() => {
    import('../assets/ai-animation.json').then((data) => {
      setAnimationData(data.default);
    });

    setMounted(true); // mark as mounted
  }, []);

  // ✅ useScroll at top-level
  const { scrollYProgress } = useScroll({
    container: mounted ? containerRef : undefined,
    offset: ['start start', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (!cardsRef.current.length) return;
    const cardCount = cardsRef.current.length;
    const breakpoints = cardsRef.current.map((_, i) => i / cardCount);
    const closestIndex = breakpoints.reduce((acc, bp, i) => {
      return Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc])
        ? i
        : acc;
    }, 0);
    setActiveIndex(closestIndex);
  });

  if (!animationData) return <div>Loading...</div>;

  const ActiveIcon = services[activeIndex].icon;

  return (
    <main id='services' className='w-full h-screen'>
      <h2 className='text-center mb-16'>Explore Our Services</h2>
      <div className=''>
        <section className='flex sticky top-0'>
          {/* Left sticky Lottie */}
          <div className='hidden lg:flex justify-end px-8 xl:px-16 items-center lg:w-1/2 bg-blue-300 h-[90vh] w-[50vw]'>
            <Lottie
              animationData={animationData}
              renderer='svg'
              style={{ height: '500px' }}
            />

            {/* Overlay card */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='absolute top-16 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-lg flex items-center space-x-4'
            >
              <ActiveIcon className='w-8 h-8 text-blue-600 dark:text-cyan-400' />
              <h3 className='text-xl font-semibold'>
                {services[activeIndex].title}
              </h3>
            </motion.div>
          </div>

          {/* Right scrollable section */}
          {mounted && (
            <section
              ref={containerRef}
              className='w-1/2 max-w-4xl mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3'
            >
              {services.map((s, i) => (
                <div
                  key={s.path}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className='p-6 rounded-2xl shadow flex border border-r-4 border-b-4 border-primary bg-card'
                >
                  <div className='flex flex-col space-y-3'>
                    <s.icon className='w-8 h-8' />
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
          )}
        </section>
      </div>
    </main>
  );
};

export default Services;
