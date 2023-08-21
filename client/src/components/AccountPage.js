import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function AccountPage({currentUser, handleLogout, userConcerts, userFestivals}){

    return (
        <div>
            <h2>Account for {currentUser.name}</h2>
            <br />
            <p>Username: {currentUser.username}</p>
            <br />
            <p>Bio: {currentUser.bio}</p>
            <br />
            <p>Total Concerts: {userConcerts.length}</p>
            <br />
            <p>Total Festivals: {userFestivals.length}</p>
            <br />
            <button onClick={handleLogout} style={{backgroundColor: 'red'}}>Logout</button>
            
        </div>
    )
}

export default AccountPage;