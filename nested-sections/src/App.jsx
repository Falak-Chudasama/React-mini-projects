import React from 'react';
import InputSection from './components/InputSection';
import SectionC from './components/SectionC';
import { useState } from 'react';

import { NumberContextProvider } from './context/numberContext';

function App() {
	const [value1, setValue1] = useState();
	const [value2, setValue2] = useState();

    return(
		<NumberContextProvider value={{ value1, value2, setValue1, setValue2 }}>
			<div className='h-screen w-screen flex items-center justify-center gap-x-5'>
				<InputSection></InputSection>
				<div className='p-4 border-4 rounded-xl border-black grid gap-y-3'>
					<h1 className='font-bold text-xl'>Section A</h1>
					<div className='p-4 border-2 rounded-xl border-black grid gap-y-2'>
						<h1 className='font-bold text-xl'>Section B</h1>
						<SectionC></SectionC>
					</div>
				</div>
			</div>
		</NumberContextProvider>
    );
}

export default App;