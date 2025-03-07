import React, { useEffect, useState, useRef } from "react";

function App() {
	const [password, setPassword] = useState("Password");
	const [passLength, setPassLength] = useState(8);
	const [hasSmalls, setHasSmalls] = useState(true);
	const [hasCapitals, setHasCapitals] = useState(false);
	const [hasNumbers, setHasNumbers] = useState(false);
	const [hasSpecials, setHasSpecials] = useState(false);

	function generatePassword() {
		if (!(hasCapitals || hasSmalls || hasNumbers || hasSpecials)) {
			setPassword("-NoOptionSelected-");
			return;
		}
		let dictionary = "";
		if (hasSmalls) dictionary += "abcdefghijklmnopqrstuvwxyz";
		if (hasCapitals) dictionary += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		if (hasNumbers) dictionary += "0123456789";
		if (hasSpecials) dictionary += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
		let newPassword = "";

		for (let i = 0; i < passLength; i++) {
			const randomNumber = Math.floor(Math.random() * dictionary.length);
			newPassword += dictionary.charAt(randomNumber);
		}

		setPassword(newPassword);
	}

	function copyToClipBoard() {
		passwordRef.current?.select();
		window.navigator.clipboard.writeText(password);
	}

	const passwordRef = useRef(null);

	useEffect(() => {
		generatePassword();
	}, [hasCapitals, hasNumbers, hasSmalls, hasSpecials, passLength]);

	return (
		<div className="w-screen h-screen bg-gray-900 flex items-center justify-center">
			<div className="p-6 bg-gray-800 rounded-lg shadow-xl flex flex-col items-center gap-4">
				<input type="text" readOnly className="font-bold text-3xl px-6 py-3 rounded-xl bg-white text-black text-center" ref={passwordRef} value={password}>
				</ input>

				<div className="grid grid-cols-2 gap-3 w-full">
					<button
						onClick={copyToClipBoard}
						className=" text-white rounded-lg font-semibold px-4 py-2 bg-slate-500 hover:bg-slate-500 duration-300"
					>
						Copy Password
					</button>

					<button
						onClick={generatePassword}
						className=" text-white rounded-lg font-semibold px-4 py-2 bg-blue-500 hover:bg-blue-600 duration-300"
					>
						Generate Password
					</button>
				</div>

				<div className="grid grid-cols-2 gap-3 w-full">
					<button
						onClick={() => setHasSmalls(!hasSmalls)}
						className={`text-white rounded-lg font-semibold px-4 py-2 duration-300 ${hasSmalls
								? "bg-green-500 hover:bg-green-600"
								: "bg-red-500 hover:bg-red-600"
							}`}
					>
						{hasSmalls ? "Exclude Lowercase" : "Include Lowercase"}
					</button>
					<button
						onClick={() => setHasCapitals(!hasCapitals)}
						className={`text-white rounded-lg font-semibold px-4 py-2 duration-300 ${hasCapitals
								? "bg-green-500 hover:bg-green-600"
								: "bg-red-500 hover:bg-red-600"
							}`}
					>
						{hasCapitals ? "Exclude Uppercase" : "Include Uppercase"}
					</button>
					<button
						onClick={() => setHasNumbers(!hasNumbers)}
						className={`text-white rounded-lg font-semibold px-4 py-2 duration-300 ${hasNumbers
								? "bg-green-500 hover:bg-green-600"
								: "bg-red-500 hover:bg-red-600"
							}`}
					>
						{hasNumbers ? "Exclude Numbers" : "Include Numbers"}
					</button>
					<button
						onClick={() => setHasSpecials(!hasSpecials)}
						className={`text-white rounded-lg font-semibold px-4 py-2 duration-300 ${hasSpecials
								? "bg-green-500 hover:bg-green-600"
								: "bg-red-500 hover:bg-red-600"
							}`}
					>
						{hasSpecials
							? "Exclude Special Characters"
							: "Include Special Characters"}
					</button>
				</div>

				<div className="flex flex-col items-center w-full">
					<input
						type="range"
						min="5"
						max="25"
						value={passLength}
						onChange={(e) => setPassLength(e.target.value)}
						className="w-full cursor-pointer accent-yellow-500"
					/>
					<span className="text-white font-semibold mt-2">{passLength}</span>
				</div>
			</div>
		</div>
	);
}

export default App;
