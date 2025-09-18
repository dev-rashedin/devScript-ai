'use client';
import { TimelineContent } from './ui/TimelineAnimation';
import { useRef } from 'react';
import { Alex, Rika, Reacher, Alicia, Steven, Angelina, Guillermo } from '../data/assets';

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
      className='relative h-full container mx-auto rounded-lg py-16 overflow-hidden'
      ref={testimonialRef}
    >
      <article className='max-w-screen- mx-auto text-center space-y-2 mb-4'>
        <TimelineContent
          as='h2'
          animationNum={0}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
        >
          Trusted by Thousands
        </TimelineContent>
        <TimelineContent
          as='p'
          className='mx-auto lg:text-lg text-muted'
          animationNum={1}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
        >
          Here's what our users — developers, writers, and content creators —
          think about DevScribe-AI
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
                src={'/logo.png'}
                alt='DevScribe-AI'
                width={100}
                height={100}
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
                  src={Alex}
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
                  src={Rika}
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
        <div className='lg:h-full md:flex lg:flex-col h-fit lg:space-y-2 lg:gap-0 gap-2'>
          <TimelineContent
            animationNum={2}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className='flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-lg border border-gray-200 p-5'
          >
            <article className='mt-auto'>
              <p className='2xl:text-base text-sm'>
                "DevScribe-AI’s code refactor and explainer tools helped our
                team reduce bugs and improve productivity drastically."
              </p>
              <div className='flex justify-between items-end pt-5'>
                <div>
                  <h2 className='font-semibold lg:text-xl text-lg'>
                    Jack Reacher
                  </h2>
                  <p className='lg:text-base text-sm'>CTO of ByteCraft</p>
                </div>
                <img
                  src={Reacher}
                  alt='Reacher'
                  width={200}
                  height={200}
                  className='lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover'
                />
              </div>
            </article>
          </TimelineContent>

          <TimelineContent
            animationNum={3}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className='flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-lg border border-gray-200 p-5'
          >
            <article className='mt-auto'>
              <p className='2xl:text-base text-sm'>
                "Our writing team now produces high-quality articles faster
                thanks to DevScribe-AI’s article generator and summarizer."
              </p>
              <div className='flex justify-between items-end pt-5'>
                <div>
                  <h2 className='font-semibold lg:text-xl text-lg'>
                    Alicia Spinet
                  </h2>
                  <p className='lg:text-base text-sm'>
                    Head of Content at WriteFlow
                  </p>
                </div>
                <img
                  src={Alicia}
                  alt='Alicia'
                  width={200}
                  height={200}
                  className='lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover'
                />
              </div>
            </article>
          </TimelineContent>

          <TimelineContent
            animationNum={4}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className='flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-lg border border-gray-200 p-5'
          >
            <article className='mt-auto'>
              <p className='2xl:text-base text-sm'>
                "The AI-powered email helper saves hours every week.
                DevScribe-AI is a must-have for our team."
              </p>
              <div className='flex justify-between items-end pt-5'>
                <div>
                  <h2 className='font-semibold lg:text-xl text-lg'>
                    Steven Sunny
                  </h2>
                  <p className='lg:text-base text-sm'>CEO of MailCraft</p>
                </div>
                <img
                  src={Steven}
                  alt='Steven Sunny'
                  width={200}
                  height={200}
                  className='lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover'
                />
              </div>
            </article>
          </TimelineContent>
        </div>

        <div className='h-full md:flex lg:flex-col lg:space-y-2 lg:gap-0 gap-2'>
          <TimelineContent
            animationNum={5}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className='lg:flex-[3] flex-[4] flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-lg border border-gray-200 p-5'
          >
            <article className='mt-auto'>
              <p>
                "DevScribe-AI has been an essential partner in streamlining our
                development and writing workflows."
              </p>
              <div className='flex justify-between pt-5'>
                <div>
                  <h2 className='font-semibold text-xl'>Guillermo Rauch</h2>
                  <p>CTO of DevLabs</p>
                </div>
                <img
                  src={Guillermo}
                  alt='Guillermo Rauch'
                  width={200}
                  height={200}
                  className='w-16 h-16 rounded-xl object-cover'
                />
              </div>
            </article>
          </TimelineContent>

          <TimelineContent
            animationNum={6}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className='lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-primaryColor overflow-hidden rounded-lg border border-gray-200 p-5'
          >
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]'></div>
            <figure>
              <img
                src={'/logo.png'}
                alt='DevScribe-AI'
                width={100}
                height={100}
              />
            </figure>
            <article className='mt-auto'>
              <p>
                "DevScribe-AI has revolutionized the way we handle code,
                articles, and emails. The platform’s versatility and AI accuracy
                are unmatched."
              </p>
              <div className='flex justify-between pt-5'>
                <div>
                  <h2 className='font-semibold text-xl'>Angelina Johnson</h2>
                  <p>Lead Engineer at CodeSphere</p>
                </div>
                <img
                  src={Angelina}
                  alt='Angelina'
                  width={200}
                  height={200}
                  className='w-16 h-16 rounded-xl object-cover'
                />
              </div>
            </article>
          </TimelineContent>
        </div>
      </div>
    </section>
  );
}

export default ClientFeedback;
