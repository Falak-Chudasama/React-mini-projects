import React, { useState } from 'react';

function App() {
    const [password, setPassword] = useState("nullnull");
    const [passLength, setPassLength] = useState(8);
    const [hasNumbers, setHasNumbers] = useState(false);
    const [hasSpecials, setHasSetSpecials] = useState(false);

    function generatePassword() {
        let lowerBound = 65;
        let upperBound = 123;
        let newPassword = "";

        if (hasSpecials) {
            upperBound = 127;
        }
        if (hasNumbers) {
            lowerBound = 48;
        }

        for (let i = 0; i < passLength; i++) {
            const randomNumber = Math.floor(Math.random() * (upperBound - lowerBound)) + lowerBound;
            newPassword += String.fromCharCode(randomNumber);
        }

        setPassword(newPassword);
    }

    return(
        <>
            <div className='w-screen h-screen bg-gray-900 flex items-center justify-center'>
                <h1 className='font-bold text-white text-3xl'>{password}</h1>
                <button onClick={generatePassword} className='text-white'>Generate Password</button>
            </div>
        </>
    );
}

export default App;