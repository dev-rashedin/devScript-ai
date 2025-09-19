import Benefits from '../component/Benefits';
import ClientFeedback from '../component/ClientFeedback';
import Hero from '../component/Hero';
import Services from '../component/Services';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Services />
      <Benefits />
      <ClientFeedback/>
    </div>
  );
};

export default Home;
