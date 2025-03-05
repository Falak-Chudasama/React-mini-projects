import React, { useState, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
);