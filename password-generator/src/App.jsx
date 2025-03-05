import React, { useState } from 'react';

function App() {
	const [password, setPassword] = useState("Password");
	const [passLength, setPassLength] = useState(8);
	const [hasSmalls, setHasSmalls] = useState(true);
	const [hasCapitals, setHasCapitals] = useState(false);
	const [hasNumbers, setHasNumbers] = useState(false);
	const [hasSpecials, setHasSpecials] = useState(false);

	function generatePassword() {
		let lowerBound = 32;
		let upperBound = 126;
		let newPassword = "";

		function isInRange(num, low, high) {
			if (num >= low && num <= high) {
				return true;
			}
			return false;
		}

		for (let i = 0; i < passLength; i++) {
			const randomNumber = Math.floor(Math.random() * (upperBound - lowerBound)) + lowerBound;

			if (!hasCapitals && isInRange(randomNumber, 65, 90)) {
				i--;
				continue;
			}

			if (!hasSmalls && isInRange(randomNumber, 97, 122)) {
				i--;
				continue;
			}

			if (!hasNumbers && isInRange(randomNumber, 48, 57)) {
				i--;
				continue;
			}

			if (!hasSpecials && (isInRange(randomNumber, 32, 47) || isInRange(randomNumber, 58, 64) || isInRange(randomNumber, 91, 96) || isInRange(randomNumber, 123, 126))) {
				i--;
				continue;
			}

			newPassword += String.fromCharCode(randomNumber);
		}

		setPassword(newPassword);
		return password;
	}

	return (
		<>
			<div className='w-screen h-screen bg-gray-900 flex items-center justify-center'>
				<div className='p-4 grid gap-y-3 place-items-center'>
					<h1 className='font-bold text-3xl px-4 py-2 rounded-md bg-yellow-300 text-black'>{password}</h1>
					<button onClick={generatePassword} className='w-max text-black rounded-lg font-semibold px-2 py-1 bg-white duration-300'>Generate Password</button>
					<button onClick={() => { setHasSmalls(!hasSmalls) }} className='w-max text-white rounded-lg font-semibold px-2 py-1 duration-300' style={{ backgroundColor: hasSmalls ? "green" : "red" }}>{hasSmalls ? "Exclude Lowercase" : "Include Lowercase"}</button>
					<button onClick={() => { setHasCapitals(!hasCapitals) }} className='w-max text-white rounded-lg font-semibold px-2 py-1 duration-300' style={{ backgroundColor: hasCapitals ? "green" : "red" }}>{hasCapitals ? "Exclude Uppercase" : "Include Uppercase"}</button>
					<button onClick={() => { setHasNumbers(!hasNumbers) }} className='w-max text-white rounded-lg font-semibold px-2 py-1 duration-300' style={{ backgroundColor: hasNumbers ? "green" : "red" }}>{hasNumbers ? "Exclude Numbers" : "Include Numbers"}</button>
					<button onClick={() => { setHasSpecials(!hasSpecials) }} className='w-max text-white rounded-lg font-semibold px-2 py-1 duration-300' style={{ backgroundColor: hasSpecials ? "green" : "red" }}>{hasSpecials ? "Exclude Special Characters" : "Include Special Characters"}</button>
					<input
						type="range"
						min="8"
						max="20"
						value={passLength}
						onChange={(e) => setPassLength(Number(e.target.value))}
						className='w-64 cursor-pointer'
					/>
					<span className='text-white font-semibold'>{passLength}</span>

				</div>
			</div>
		</>
	);
}

export default App;