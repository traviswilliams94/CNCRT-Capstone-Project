import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar({handleLogout}){
    return (
        <nav id='navbar'>
            <NavLink className='NavLink' exact to='/'>Home</NavLink>
            <NavLink className='NavLink' to='/concerts'>My Concerts</NavLink>
            <NavLink className='NavLink' to='/festivals'>My Festivals</NavLink>
            <NavLink className='NavLink' to='/venues'>Venues</NavLink>
            <NavLink className='NavLink' to='/login' onClick={handleLogout}>Logout</NavLink>
            
        </nav>
    )
}

export default NavBar;