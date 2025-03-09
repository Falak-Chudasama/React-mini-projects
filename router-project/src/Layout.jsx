import React, { useState } from 'react';
import { Header, Footer } from './components/index.js';
import { Outlet } from 'react-router-dom';

function Layout() {
    return(
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}

export default Layout;