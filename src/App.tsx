import React from 'react';
import './App.css';
import {MenyCard} from "./components/MenyCard";
function App() {
    return (
        <div className="App">
            <header className='header'>
                <img className='header-img' src='./assets/shawarmarull.jpg' />
                <div className='logo-wrapper'>
                <img  className='logo' src='./assets/logo.jpg' alt='logo'/>
                </div>
            </header>
            <nav>

            </nav>
            <div className="app-wrapper" >
                <MenyCard title="SHAWARMA I RULL" allergier="Allergier: gluten" img={'./assets/shawarmarull.jpg'}/>
                <MenyCard title="SHAWARMA I RULL" allergier="Allergier: gluten" img={'./assets/shawarmarull.jpg'}/>
                <MenyCard title="SHAWARMA I RULL" allergier="Allergier: gluten" img={'./assets/shawarmarull.jpg'}/>
                <MenyCard title="SHAWARMA I RULL" allergier="Allergier: gluten" img={'./assets/shawarmarull.jpg'}/>
                <MenyCard title="SHAWARMA I RULL" allergier="Allergier: gluten" img={'./assets/shawarmarull.jpg'}/>
                <MenyCard title="SHAWARMA I RULL" allergier="Allergier: gluten" img={'./assets/shawarmarull.jpg'}/>

            </div>
        </div>
    );
}

export default App;
