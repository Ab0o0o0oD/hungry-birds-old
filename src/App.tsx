import React from 'react';
import './App.css';
<<<<<<< HEAD
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
=======
import { MainPage } from './container/MainPage';
import { ItemProvider } from './state/ItemContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
        </div>
      </header>
<<<<<<< HEAD
      <nav></nav>
<<<<<<< HEAD
      <MainPage />
>>>>>>> 3f8d105 (fix: Added prettier)
=======
      <ItemProvider>
        <MainPage />
      </ItemProvider>
>>>>>>> 9a9ad78 (feat: Added cart item context provider)
=======
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ItemProvider>
          <MainPage />
        </ItemProvider>
      </LocalizationProvider>
>>>>>>> bda5181 (fix: Added checkout modal content (#16))
    </div>
  );
}

export default App;
