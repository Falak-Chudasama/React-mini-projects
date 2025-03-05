import React, { useState } from 'react';

const colorMap = {
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    blue: "bg-blue-500",
    white: "bg-white",
    black: "bg-black",
};

function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function Button({ color = "red", fontColor = "white", bgColorSetter }) {
    const fontColor2 = fontColor === "black" ? "text-black" : "text-white";
    return (
        
        <button
            className={`${colorMap[color]} ${fontColor2} px-6 py-3 border-2 border-black text-xl font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-md`}
            onClick={() => bgColorSetter(color)}
        >
            {capitalizeWord(color)}
        </button>
    );
}

function App() {
    const [bgColor, setBgColor] = useState('white');

    return (
        <div
            className={`w-screen h-screen flex flex-col items-center justify-center transition-all duration-300 ${colorMap[bgColor]}`}
        >
            <div className="p-6 flex flex-wrap justify-center items-center gap-4">
                <Button bgColorSetter={(color) => {setBgColor(color)}} />
                <Button color="green" fontColor="black" bgColorSetter={(color) => {setBgColor(color)}} />
                <Button color="yellow" fontColor="black" bgColorSetter={(color) => {setBgColor(color)}} />
                <Button color="blue" fontColor="black" bgColorSetter={(color) => {setBgColor(color)}} />
                <Button color="orange" fontColor="black" bgColorSetter={(color) => {setBgColor(color)}} />
                <Button color="white" fontColor="black" bgColorSetter={(color) => {setBgColor(color)}} />
                <Button color="black" fontColor="white" bgColorSetter={(color) => {setBgColor(color)}} />
            </div>
        </div>
    );
}

export default App;