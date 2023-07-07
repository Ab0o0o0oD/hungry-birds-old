import React from 'react';
import './App.css';
<<<<<<< HEAD
import { MainPage } from './container/MainPage';
import { ItemProvider } from './state/ItemContext';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img
          className="header-img"
          src="./assets/shawarmarull.jpg"
          alt="header"
        />
        <div className="logo-wrapper">
          <img className="logo" src="./assets/logo.PNG" alt="logo" />
=======
import {MainPage} from "./container/MainPage";

function App() {
    return (
        <div className="App">
            <header className='header'>
                <img className='header-img' src='./assets/shawarmarull.jpg' alt='header'/>
                <div className='logo-wrapper'>
                    <img className='logo' src='./assets/logo.PNG' alt='logo'/>
                </div>
            </header>
            <nav>

            </nav>
            <MainPage/>
>>>>>>> 5eab785 (fix: Added responsive meny style (#1))
        </div>
      </header>
      <nav></nav>
      <ItemProvider>
        <MainPage />
      </ItemProvider>
    </div>
  );
}

export default App;
