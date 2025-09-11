import { Outlet } from 'react-router';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <main>
      <Navbar />
      <section className='boundary min-h-[80vh]'>
     <Outlet/>
      </section>
      <Footer/>
    </main>
  );
};
export default App;
