import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialStateTodos = [
    { id : 1, title : "Go to the gym", completed : true },
    { id : 2, title : "Complete online Javascript bluuweb Curse", completed : true},
    { id : 3, title : "10 minutes meditation", completed : false},
    { id : 4, title : "Pick up groceries", completed : false},
    { id : 5, title : "Complete todo app on Frontend Mentors", completed : false}
]

const App = () => {

    const [todos, setTodos] = useState(initialStateTodos);

    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
            {/* Header */}
            <Header />

            <main className="container mx-auto px-4 mt-8">

                <TodoCreate />

                <TodoList todos={todos} />

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
