import { useState } from "react";

const TodoCreate = ( {createTodo} ) => {

    const [title, setTitle] = useState('');

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        
        if (!title.trim()){
            return setTitle('');
        }
        createTodo(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmitAddTodo} className="bg-white rounded-md overflow-hidden py-3 flex gap-3 items-center px-4">
            <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
            <input
                type="text"
                placeholder="Create a new To-do"
                className="w-full text-gray-400 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
