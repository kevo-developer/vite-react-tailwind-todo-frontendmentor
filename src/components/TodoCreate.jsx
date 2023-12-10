const TodoCreate = () => {
    return (
        <form className="bg-white rounded-md overflow-hidden py-3 flex gap-3 items-center px-4">
            <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
            <input
                type="text"
                placeholder="Create a new To-do"
                className="w-full text-gray-400 outline-none"
            />
        </form>
    );
};

export default TodoCreate;
