import { Outlet } from 'react-router';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <main className=' flex flex-col relative'>
      <Navbar />
      <section className='boundary flex-1'>
        <Outlet />
      </section>
    
        <Footer />
  
    </main>
  );
};
export default App;
