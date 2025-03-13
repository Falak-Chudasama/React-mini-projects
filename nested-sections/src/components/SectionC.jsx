import React from 'react';
import { getValues } from '../context/numberContext.js';

function SectionC() {
    const [value1, value2] = getValues();

    return(
        <div className='p-4 border-2 rounded-xl border-black grid gap-y-2'>
            <h1 className='font-bold text-lg'>Section C</h1>
            <h1 className='font-semibold text-base text-gray-600'>Value1: { value1 }</h1>
            <h1 className='font-semibold text-base text-gray-600'>Value2: { value2 }</h1>
        </div>
    );
}

export default SectionC;