import React, { useState } from 'react';
import AboutModal from './AboutModal';

function AccountPage({currentUser, handleLogout, userConcerts, userFestivals}){
    const [learnMore, setLearnMore] = useState(false)

    function toggleLearnMore(){
        setLearnMore(!learnMore)
    }

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
            <br />
            <br />
            <button onClick={toggleLearnMore}>Learn More About CNCRT</button>
            {learnMore ?
            <AboutModal toggleLearnMore={toggleLearnMore} />
            : null}
            
        </div>
    )
}

export default AccountPage;