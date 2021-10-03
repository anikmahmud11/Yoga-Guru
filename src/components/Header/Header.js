import React from 'react';
import Cart from '../Cart/Cart';
import './Header.css';

const Header= () => {
   
    return (
        <div className="container d-flex justify-content-center">
            <div className="header-style">
               <h1> Yoga Guru</h1>
               <h6>Online Yoga Guru Is Here !!!</h6>
            </div> 
            <div >
                <Cart></Cart>
            </div> 
        </div>
    );
};

export default Header;