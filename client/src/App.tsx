import { Outlet } from 'react-router';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <main>
      <Navbar />
      <section className='boundary min-h-[80vh]'>
     <Outlet/>
      </section>
    </main>
  );
};
export default App;
