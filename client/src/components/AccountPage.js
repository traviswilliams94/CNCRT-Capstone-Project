import React, { useState } from 'react';
import AboutModal from './AboutModal';
import UpdateProfile from './UpdateProfile';
import { Button } from 'semantic-ui-react';

function AccountPage({currentUser, handleLogout, userConcerts, userFestivals}){
    const [learnMore, setLearnMore] = useState(false)
    const [updateProfile, setUpdateProfile] = useState(false)

    function toggleLearnMore(){
        setLearnMore(!learnMore)
    }

    function toggleUpdateProfile(){
        setUpdateProfile(!updateProfile)
    }

    return (
        <div className='accountpage' style={{fontSize: 'x-large'}}>
            <h1>Account for {currentUser.name}</h1>
            <br />
            <p>Username: {currentUser.username}</p>
            <br />
            <p>Bio: {currentUser.bio}</p>
            
            <Button color='blue' onClick={toggleUpdateProfile} >Update Profile</Button>
            <br />
            <br />
            <p>Total Concerts: {userConcerts.length}</p>
            <br />
            <p>Total Festivals: {userFestivals.length}</p>
            <br />
            <Button onClick={handleLogout} color='red'>Logout</Button>
            <br />
            <br />
            <Button onClick={toggleLearnMore}>Learn More About CNCRT</Button>
            {learnMore ?
            <AboutModal toggleLearnMore={toggleLearnMore} />
            : null}
            {updateProfile ?
            <UpdateProfile toggleUpdateProfile={toggleUpdateProfile} currentUser={currentUser}/>
        : null}
            
        </div>
    )
}

export default AccountPage;