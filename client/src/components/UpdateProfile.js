import React, {useState} from 'react';
import { Button } from 'semantic-ui-react';


function UpdateProfile({toggleUpdateProfile, currentUser}){

    const [userData, setUserData] = useState({
        name: currentUser.name,
        bio: currentUser.bio,
        username: currentUser.username,
    })

    function handleProfileChange(event){
        const name = event.target.name;
        const value =  event.target.value
        setUserData({
            ...userData,
            [name]: value,
        });
    }

    function handleProfileUpdate(){
        fetch(`users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(
                userData
              ),
        })
        .then((res) => res.json())
        .then(toggleUpdateProfile)
        .then(window.location.reload(true));
    }

    return (
        <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                    <form class='ui form' onSubmit={handleProfileUpdate} >
                        <label>Name: </label>
                        <input
                            type='text'
                            name='name'
                            onChange={handleProfileChange}
                            value={userData.name}
                        />
                        <br />
                        <label>Bio: </label>
                        <textarea 
                            type='text'
                            name='bio'
                            onChange={handleProfileChange}
                            value={userData.bio}
                        />
                        <br />
                        <label>Username: </label>
                        <input
                            type='text'
                            name='username'
                            onChange={handleProfileChange}
                            value={userData.username}
                        />
                        <br />
                        <br />
                        <Button color='blue' class='ui button' type='submit'>Update Profile</Button>
                    </form>
                    <br />
                    <Button color='red' onClick={toggleUpdateProfile}>Exit</Button>

                </div>
            </div>
        </div>
    )
}

export default UpdateProfile;