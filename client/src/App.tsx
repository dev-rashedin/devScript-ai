import { Outlet } from 'react-router';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <main>
      <Navbar />
      <section className='boundary min-h-[calc(100vh-160px)]'>
        <Outlet />
      </section>
    
        <Footer />
  
    </main>
  );
};
export default App;
