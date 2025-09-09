// import CodeEntry from './component/CodeEntry';
import Home from './component/Home';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <main>
      <Navbar />
      <section className='boundary min-h-[calc(100vh-80px)]'>
        {/* <CodeEntry /> */}

        <Home />
      </section>
    </main>
  );
};
export default App;
