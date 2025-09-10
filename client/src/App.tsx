import CodeEntry from './component/CodeEntry';
// import Home from './component/Home';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <main>
      <Navbar />
      <section className='boundary min-h-[80vh] flex-center'>
        <CodeEntry />

        
        {/* <Home /> */}
      </section>
    </main>
  );
};
export default App;
