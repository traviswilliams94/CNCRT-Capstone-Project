import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Signup ({setCurrentUser}){
    const navigate = useNavigate();

    const [signupData, setSignupData] = useState({
        name: "",
        bio: "",
        username: "",
        password: "",
    })

    const {name, bio, username, password} = signupData

    function handleSignupChange(event){
        const name = event.target.name;
        let value = event.target.value

        setSignupData({
            ...signupData,
            [name]: value,
        });
    }

    function handleSignup(event){
        event.preventDefault()
        

        const user = {
            name,
            bio,
            username,
            password
        }
        if (password.length >= 8) {
            fetch('/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json',
                },
                body: JSON.stringify(user),
            })
            .then(res => {
                
                res.json().then(user => {
                    setCurrentUser(user)
                    navigate('/')
                })
                })
        }
        else {
            return(
            alert('Password must be 8 or more characters')
        )}
    }

    return (
        <div>
            <div className='loginForm'>
            <form class='ui form' onSubmit={handleSignup}>
                <div class="field">
                <label style={{color: 'white'}}>Name: </label>
                <input
                    type= 'text'
                    name='name'
                    onChange={handleSignupChange}
                    value={signupData.name}
                    placeholder='First and Last Name'
                />
                <span style={{color: 'red'}}>Required</span>
                </div>
                <div class="field">
                <label style={{color: 'white'}}>Bio: </label>
                <input className='commentbox'
                    type= 'text'
                    name='bio'
                    onChange={handleSignupChange}
                    value={signupData.bio}
                    placeholder='Short Bio'
                />
                </div>
                <div class="field">
                <label style={{color: 'white'}}>Username: </label>
                <input
                    type= 'text'
                    name='username'
                    onChange={handleSignupChange}
                    value={signupData.username}
                    placeholder='Username'
                />
                <span style={{color: 'red'}}>Required</span>
                </div>
                <div class="field">
                <label style={{color: 'white'}}>Password: </label>
                <input
                    type= 'text'
                    name='password'
                    onChange={handleSignupChange}
                    value={signupData.password}
                    placeholder='Password'
                />
                <span style={{color: 'red'}}>Must be at least 8 characters</span>
                </div>
                <button class='ui button' type='submit'>Create Account</button>
            </form>
            </div>
        </div>
    )
}

export default Signup;