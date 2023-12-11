import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialStateTodos = [
    { id: 1, title: "Go to the gym", completed: true },
    {
        id: 2,
        title: "Complete online Javascript bluuweb Curse",
        completed: true,
    },
    { id: 3, title: "10 minutes meditation", completed: false },
    { id: 4, title: "Pick up groceries", completed: false },
    { id: 5, title: "Complete todo app on Frontend Mentors", completed: false },
];

const App = () => {

    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id : Date.now(),
            title : title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(todos.map(
            todo => todo.id === id ? {...todo, completed: !todo.completed}:todo));
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const filteredTodos = () => {
        switch (filter) {
            case "all" : return todos;
            case "active" : return todos.filter((todo) => !todo.completed);
            case "completed" : return todos.filter((todo) => todo.completed);
            default : return todos;
        }
    };

    const changeFilter = (filter) => setFilter(filter);

    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
            <Header />

            <main className="container mx-auto px-4 mt-8">
                <TodoCreate 
                createTodo={createTodo}/>

                <TodoList 
                todos={filteredTodos()} 
                removeTodo={removeTodo} 
                updateTodo={updateTodo}/>

                <TodoComputed c
                omputedItemsLeft={computedItemsLeft} 
                clearCompleted={clearCompleted}/>

                <TodoFilter 
                changeFilter={changeFilter}
                filter = {filter}/>
            </main>

            <footer className="text-center mt-8 dark:text-gray-400">
                Drag and Drop to order list
            </footer>
        </div>
    );
};

export default App;
