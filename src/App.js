import React from 'react';
import './App.sass';
import logo from './MAI-Youth-Logo.jpg'

function App() {
    return (
        <div className="Homepage">
            <div className="Top-bar">
                <img className="Logo" alt="MAI Logo" src={logo}/>
                <h1 className="Title">MAI Youth</h1>
            </div>
        </div>
    );
}

export default App;
