import Benefits from '../component/Benefits';
import ClientFeedback from '../component/ClientFeedback';
import { StickyScrollRevealDemo } from '../component/Demo';
import Hero from '../component/Hero';
import Services from '../component/Services2';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Services />
      <StickyScrollRevealDemo/>
      <Benefits />
      <ClientFeedback/>
    </div>
  );
};

export default Home;
