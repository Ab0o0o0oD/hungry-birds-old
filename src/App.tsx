import React from 'react';
import './App.css';
import {MainPage} from "./container/MainPage";

function App() {
    return (
        <div className="App">
            <header className='header'>
                <img className='header-img' src='./assets/shawarmarull.jpg'/>
                <div className='logo-wrapper'>
                    <img className='logo' src='./assets/logo.jpg' alt='logo'/>
                </div>
            </header>
            <nav>

            </nav>
            <MainPage/>
        </div>
    );
}

export default App;
