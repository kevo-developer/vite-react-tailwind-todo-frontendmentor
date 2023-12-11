import { useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.2em]">
                    To-do
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    { darkMode ? <IconSun /> : <IconMoon /> }
                </button>
            </div>
        </header>
    );
};

export default Header;
