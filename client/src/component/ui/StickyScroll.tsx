import {  useRef, useState } from 'react';
import { useMotionValueEvent, useScroll, motion } from 'motion/react';
import Lottie from 'lottie-react';
import { cn } from '../../lib/utils';
import type { ServiceContent } from '../../types';
import animationData from '../../assets/ai-animation.json';
import { CgArrowTopRight } from 'react-icons/cg';
import { Link } from 'react-router';

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: ServiceContent[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref, // track whole section
    offset: ['start start', 'end end'],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <section ref={ref} className='relative flex w-full'>
      {/* Left sticky column */}
      <div className='hidden lg:flex lg:flex-col w-1/2 h-screen sticky top-20 p-12 items-end bg-blue-300 self-start'>
        <div
          className={cn(
            'relative h-[200px] w-[360px] rounded-xl overflow-hidden flex flex-col items-center justify-center text-white',
            contentClassName
          )}
          style={{
            background: 'linear-gradient(to bottom right, #06b6d4, #10b981)',
          }}
        >
          {(() => {
            const Icon = content[activeCard].icon;
            return (
              <div>
                <Icon size={40} className='mb-4' />
                <h2 className='text-2xl font-bold'>
                  {content[activeCard].title}
                </h2>
              </div>
            );
          })()}
        </div>
        <div>
          <Lottie
            animationData={animationData}
            renderer='svg'
            style={{ height: '400px' }}
          />
        </div>
      </div>

      {/* Right scrollable column */}
      <div className='w-full lg:w-1/2 px-6'>
        <div className='max-w-xl mx-auto'>
          {content.map((item, index) => (
            <div key={item.title + index} className='my-[80vh]'>
              <motion.h2
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}

              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className='text-base my-4 max-w-sm'
              >
                {item.desc}
              </motion.p>
              <motion.div animate={{ opacity: activeCard === index ? 1 : 0.3 }}>
                <Link
                  to={item.path}
                  className='cursor-pointer flex gap-1 items-center group'
                >
                  <span className='group-hover:translate-x-1 transition-all duration-300 ease-in'>
                    {item.cta}
                  </span>
                  <CgArrowTopRight className='text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in' />
                </Link>
              </motion.div>
            </div>
          ))}
          <div className='h-40' />
        </div>
      </div>
    </section>
  );
};
