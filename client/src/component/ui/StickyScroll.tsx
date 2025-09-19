import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Lottie from 'lottie-react';
import { CgArrowTopRight } from 'react-icons/cg';
import { Link } from 'react-router';
import { cn } from '../../lib/utils';
import type { ServiceContent } from '../../types';
import animationData from '../../assets/ai-animation.json';

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: ServiceContent[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Update activeCard based on which card is entering the viewport
  const handleScroll = () => {
    if (!containerRef.current) return;
    let newIndex = 0;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        newIndex = i; // update to the card currently visible
      }
    });
    setActiveCard(newIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeCard]);

  return (
    <section ref={containerRef} className='relative flex w-full'>
      {/* Left sticky column */}
      <div className='hidden lg:flex lg:flex-col w-1/2 h-screen sticky top-20 p-12 items-end bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200'>
        <div
          className={cn(
            'relative h-[200px] w-[360px] rounded-xl overflow-hidden flex flex-col items-center justify-center',
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
                <Icon size={36} className='mb-4' />
                <h2 className='text-2xl font-bold'>
                  {content[activeCard].title}
                </h2>
              </div>
            );
          })()}
        </div>
        <div className='mt-6'>
          <Lottie animationData={animationData} style={{ height: '400px' }} />
        </div>
      </div>

      {/* Right scrollable column */}
      <div className='w-full lg:w-1/2 px-6'>
        <div className='max-w-xl mx-auto'>
          {content.map((item, index) => (
            <div
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              key={item.title + index}
              className='my-[90vh]'
            >
              <motion.h2 className='text-2xl font-bold'>{item.title}</motion.h2>
              <motion.p className='text-base my-4 max-w-sm'>
                {item.desc}
              </motion.p>
              <motion.div>
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
