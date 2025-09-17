'use client';
import { TimelineContent } from './ui/TimelineAnimation';
import { useRef } from 'react';

function ClientFeedback() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: 'blur(10px)',
      y: -20,
      opacity: 0,
    },
  };

  return (
    <section
      className='relative h-full container mx-auto rounded-lg py-14 overflow-hidden'
      ref={testimonialRef}
    >
      <article className='max-w-screen-md mx-auto text-center space-y-2'>
        <TimelineContent
          as='h1'
          className='xl:text-4xl text-3xl font-medium'
          animationNum={0}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
        >
          Trusted by Developers and Content Creators Worldwide
        </TimelineContent>
        <TimelineContent
          as='p'
          className='mx-auto text-gray-500'
          animationNum={1}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
        >
          Here's what our users think about DevScribe-AI
        </TimelineContent>
      </article>

      <div className='lg:grid lg:grid-cols-3 gap-2 flex flex-col w-full lg:py-10 pt-10 pb-4 lg:px-10 px-4'>
        <div className='md:flex lg:flex-col lg:space-y-2 h-full lg:gap-0 gap-2'>
          <TimelineContent
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className='lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-primaryColor overflow-hidden rounded-lg border border-gray-200 p-5'
          >
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]'></div>
            <figure>
              <img
                src='/logos/Logo-1.svg'
                alt='DevScribe-AI'
                width={200}
                height={200}
              />
            </figure>
            <article className='mt-auto'>
              <p>
                "DevScribe-AI transformed our development workflow. Code
                explanations and article generation save us hours every week."
              </p>
              <div className='flex justify-between pt-5'>
                <div>
                  <h2 className='font-semibold lg:text-xl text-sm'>
                    Alex Morgan
                  </h2>
                  <p>Lead Developer at CodeWave</p>
                </div>
                <img
                  src='/people/am1.jpg'
                  alt='Alex Morgan'
                  width={200}
                  height={200}
                  className='w-16 h-16 rounded-xl object-cover'
                />
              </div>
            </article>
          </TimelineContent>

          <TimelineContent
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className='lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-lg border border-gray-200 p-5'
          >
            <article className='mt-auto'>
              <p>
                "The summarizer and email helper are game-changers for content
                teams. DevScribe-AI is incredibly intuitive."
              </p>
              <div className='flex justify-between pt-5'>
                <div>
                  <h2 className='font-semibold text-xl'>Rika Shinoda</h2>
                  <p>Content Lead at WriteLab</p>
                </div>
                <img
                  src='/people/am3.jpg'
                  alt='Rika Shinoda'
                  width={200}
                  height={200}
                  className='w-16 h-16 rounded-xl object-cover'
                />
              </div>
            </article>
          </TimelineContent>
        </div>

        {/* Continue updating the rest in the same way: names, roles, companies, and references to DevScribe-AI */}
      </div>
    </section>
  );
}

export default ClientFeedback;
