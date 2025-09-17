import { Outlet } from 'react-router';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Blob from './component/ui/Blob';

const App = () => {
  return (
    <main className=' relative'>
      <Blob />
      <Navbar />
      <section className=' min-h-[calc(100vh-320px)] lg:min-h-[calc(100vh-276px)]'>
        <Outlet />
      </section>

      <Footer />
    </main>
  );
};
export default App;
