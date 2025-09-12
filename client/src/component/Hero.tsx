import { motion } from 'motion/react';
import { Highlight } from './ui/hero-highlight';
import Button from './ui/button';

const Hero = () => {
  return (
    <main className='text-center max-w-3xl min-h-[60vh] flex-col-center mx-auto py-16 space-y-1'>
      <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
        AI Assistant for{' '}
      </h1>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'
        >
          <Highlight className='text-black dark:text-white'>
            Developers & Writers
          </Highlight>
        </motion.h1>
     

      <p className='text-lg lg:text-xl text-muted mt-8'>
        Explain code, refactor smarter, summarize documents, write articles,
        craft emails, and polish your resume — all in one place.
      </p>
      {/* call to action */}
      <section className='flex-center gap-4 mt-6'>
        <Button label='Get Started' type='primary' />
        <Button label='View Services' type='secondary' />
      </section>
    </main>
  );
};
export default Hero;
