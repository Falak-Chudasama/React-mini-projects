import React, { useEffect, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
    const [themeMode, setThemeMode] = useState("light");

    const setLightMode = () => {
        if (themeMode === "dark") {
            setThemeMode("light");
        }
    };

    const setDarkMode = () => {
        if (themeMode === "light") {
            setThemeMode("dark");
        }
    };

    useEffect(() => {
        const html = document.querySelector('html');
        html.classList.remove('light', 'dark');
        html.classList.add(themeMode);
    }, [themeMode])

    return (
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn themeMode={themeMode} setLightMode={setLightMode} setDarkMode={setDarkMode}></ThemeBtn>
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card></Card>
                </div>
            </div>
        </div>
    );
}

export default App;
