import CodeExplainForm from './component/forms/CodeExplainForm';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <main>
      <Navbar />
      <section className='boundary min-h-[80vh]'>
        <CodeExplainForm />
      </section>
    </main>
  );
};
export default App;
