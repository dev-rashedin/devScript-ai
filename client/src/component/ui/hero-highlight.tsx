import { cn } from '../../lib/utils';
import { motion, } from 'motion/react';
import React from 'react';



export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: '0% 100%',
      }}
      animate={{
        backgroundSize: '100% 100%',
      }}
      transition={{
        duration: 2,
        ease: 'linear',
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-1 pb-1`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
