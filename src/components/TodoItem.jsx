import CrossIcon from "./icons/CrossIcon";

const TodoItem = () => {
    return (
        <article className="bg-white flex gap-4 border-b-gray-300 border-b py-4 p-4">
            <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="text-gray-700 grow">
                Complete online Javascript course
            </p>
            <button className="flex-none">
                <CrossIcon />
            </button>
        </article>
    );
};

export default TodoItem;
