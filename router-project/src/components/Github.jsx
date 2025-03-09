import React from 'react';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    return(
        <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
            Github Follower: {data?.followers}
            <img src={data?.avatar_url} alt="github picture" width={300} />
        </div>
    );
}

export default Github;

export const githubLoader = async () => {
    const data = await fetch('https://api.github.com/users/Falak-Chudasama');

    return data.json();
}