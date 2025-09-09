import CodeEntry from "./component/CodeEntry"
import Home from "./component/Home"

const App = () => {  
  return (
    <main className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8 xl:px-12">
      <CodeEntry />
      <Home/>
   </main>
  )
}
export default App