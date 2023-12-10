import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

const App = () => {
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
            {/* Header */}
            <Header />

            <main className="container mx-auto px-4 mt-8">

                <TodoCreate />

                <TodoList />

                <TodoComputed />

                <TodoFilter />
            </main>

            <footer className="text-center mt-8 text-gray-400">
                Drag and Drop to order list
            </footer>
        </div>
    );
};

export default App;
