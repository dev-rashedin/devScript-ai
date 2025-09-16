import { Outlet } from 'react-router';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <section className='boundary min-h-[calc(100vh-320px)] lg:min-h-[calc(100vh-276px)]'>
        <Outlet />
      </section>
    
        <Footer />
  
    </main>
  );
};
export default App;
