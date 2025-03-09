import React from 'react';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home, About, Contact, Params, Github } from  './components/index.js';
import { githubLoader } from './components/Github.jsx';
import Layout from './Layout.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='params/:param' element={<Params />}></Route>
            <Route
            loader={
                githubLoader
            }
            path='github' element={<Github />}></Route>
        </Route>
    )
);

function App() {
    return(
        <RouterProvider router={router}></RouterProvider>
    );
}

export default App;