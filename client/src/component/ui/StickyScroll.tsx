import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import type { ServiceContent } from '../../types';

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: ServiceContent[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ['start start', 'end start'],
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

  const linearGradients = [
    'linear-gradient(to bottom right, #06b6d4, #10b981)', // cyan-500 to emerald-500
    'linear-gradient(to bottom right, #ec4899, #6366f1)', // pink-500 to indigo-500
    'linear-gradient(to bottom right, #f97316, #eab308)', // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className='relative flex flex-row-reverse gap-12 w-screen h-screen justify-center space-x-10 overflow-y-auto rounded-md py-10'
      ref={ref}
    >
      {/* title and description */}
      <div className='div relative lg:w-1/2 flex items-start px-4'>
        <div className='max-w-2xl'>
          {content.map((item, index) => (
            <div key={item.title + index} className='my-40'>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-2xl font-bold '
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-kg mt-10 max-w-sm '
              >
                {item.desc}
              </motion.p>
            </div>
          ))}
          <div className='h-40' />
        </div>
      </div>
      {/* image */}
      <section className='bg-blue-100 lg:w-1/2 sticky top-0 flex justify-end px-12' >
        
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            'sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block',
            contentClassName
          )}
        >
          {React.isValidElement(content[activeCard].content)
            ? content[activeCard].content
            : typeof content[activeCard].content === 'string' ||
              typeof content[activeCard].content === 'number'
            ? content[activeCard].content
            : null}
        </div>
        
      </section>
    </motion.div>
  );
};
