import { motion } from 'motion/react';
import { Highlight } from './ui/HeroHighlight';
import Button from './ui/Button';

const Hero = () => {
  return (
    <main className='text-center max-w-3xl min-h-[65vh] flex-col-center mx-auto px-1 py-16 space-y-2'>
      <h1 className=''>AI Assistant for </h1>
      {/* animated text */}
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
      >
        <Highlight className='text-secondary'>Developers & Writers</Highlight>
      </motion.h1>

      <p className='md:text-lg lg:text-xl text-muted mt-4 lg:mt-8'>
        Explain code, refactor smarter, summarize documents, write articles,
        craft emails, and polish your resume — all in one place.
      </p>
      {/* call to action */}
      <section className='flex-center gap-4 mt-2 lg:mt-6'>
        <Button label='Get Started' type='primary' />
        <Button label='View Services' type='secondary' href='#services' />
      </section>

      {/* note */}
      <p className='text-muted text-[14px] mt-4 text-center'>
        <span className='font-bold'>Note:</span> Some features described here
        might be planned in our roadmap but not yet released. You can open a
        live chat from within your account and our Support team can offer more
        details or help you with workarounds.
      </p>
    </main>
  );
};
export default Hero;
