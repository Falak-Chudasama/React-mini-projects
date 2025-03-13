import React, { useState } from 'react';
import { getEverything } from '../context/numberContext.js';

function InputSection() {
    const { value1, value2, setValue1, setValue2 } = getEverything();

    return(
        <div className='p-4 border-4 rounded-xl border-black grid gap-y-3'>
            <h1 className='font-bold text-xl'>
                Input Section
            </h1>
            <input 
                type="number"
                onChange={(e) => {
                    setValue1(e.target.value);
                }}
                value={value1}
                placeholder='Enter value1 : 0'
                className='block border-2 border-black px-2 py-1 rounded-lg'
            />
            <input 
                type="text"
                onChange={(e) => {
                    setValue2(e.target.value);
                }}
                value={value2}
                placeholder='Enter value2 : zero'
                className='block border-2 border-black px-2 py-1 rounded-lg'
            />
        </div>
    );
}

export default InputSection;