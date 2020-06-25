import React from 'react';

import Register from '../Layout/Register';
import About from '../Layout/About';
import Home from '../Layout/Home';

const Main = () => {
    return(
        <div>
            <main>
                <About />
                <Register />
                <Home />
            </main>
        </div>
    );
}



export default Main;