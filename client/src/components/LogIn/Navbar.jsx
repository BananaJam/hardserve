import React from 'react';
import { NavLink  } from "react-router-dom";

import arrow from '../img/arrow.svg';

import "../css/style.css";

const Navbar = () => {

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return ( 
        <div className='nav'>
            <div className='container-nav'> 
                <div className='nav-row'>
                    <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                    <button className='btn-back-container'>
                        <img className='arrow' src={arrow} alt='hjg'/>
                        <h1 className='text-back'>
                            Back
                        </h1>
                    </button>
                    </NavLink>


                    <button className='btn-sign text-sign' href="#">
                    <NavLink to="/sign" className={({isActive}) => isActive ? activeLink : normalLink}>

                    Create an account

                    </NavLink>
                    </button>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;