import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="bg-white flex gap-4 border-b-gray-300 border-b py-4 p-4">
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 ${
                    completed
                        ? "flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-center items-center"
                        : "inline-block"
                }`}
                onClick={() => updateTodo(id)} 
            >
                {completed && <IconCheck />}
            </button>

            <p className={`text-gray-700 grow ${completed && "line-through"}`}>
                {title}
            </p>

            <button className="flex-none" onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    );
};

export default TodoItem;
