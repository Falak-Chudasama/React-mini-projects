import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Params() {
    const { param } = useParams();
    return(
        <h1 className='text-4xl font-bold text-center bg-slate-300 my-3 p-3'>{param}</h1>
    );
};