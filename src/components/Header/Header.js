import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Header.css';
import { useSpring, animated } from 'react-spring'

const Header= () => {
    const [flip, set] = useState(false)
    return (
        <div className="container d-flex justify-content-center">
            <div className="header-style text-success">
               <h1> Yoga Guru </h1>
              <animated.div style={useSpring({ 
                  to: { opacity: 1 },
                  reset: true,
                  reverse: flip,
                  delay: 200, 
                  onRest: () => set(!flip),
                  from: { opacity: 0 } 
                  })}><p>Online Yoga Guru !!!</p></animated.div>
               <p>Practicing yoga at home means that you can find your center and let go of your worries in the comfort of your own four walls. </p>
            </div> 
            <div >
                <Cart></Cart>
            </div> 
        </div>
    );
};

export default Header;