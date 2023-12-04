import CrossIcon from "./componentes/icons/CrossIcon";
import MoonIcon from "./componentes/icons/MoonIcon";



const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
      
      <header className="container mx-auto px-4 pt-8">
        
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.2em]">To-do</h1>
          <button>
            <MoonIcon fill="#fff" />
          </button>
        </div>
        
        <form className="bg-white rounded-md overflow-hidden py-3 flex gap-3 items-center px-4 mt-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input 
          type="text" 
          placeholder="Create a new To-do" 
          className="w-full text-gray-400 outline-none"/>
        </form>

      </header>
      
      <main className="container mx-auto px-4 mt-8">
        <div className="rounded-md bg-white">
          
          <article className="bg-white flex gap-4 border-b-gray-300 border-b py-4 p-4">
            <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="text-gray-700 grow">Complete online Javascript course</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear completed</button>
        </section>

        </div>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md p-4 flex justify-center gap-4">
          
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>

        </div>
      </section>
      <p className="text-center mt-8 text-gray-400">Drag and Drop to order list</p>

    </ div>
  );
};

export default App;