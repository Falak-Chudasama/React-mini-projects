import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Home, About, Contact, Footer } from  './components/index.js';

function App() {
    return(
        <Router>
            <Header></Header>
			<Footer></Footer>
        </Router>
    );
}

export default App;