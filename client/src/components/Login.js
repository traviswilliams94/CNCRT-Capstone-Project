import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Signup from './Signup';
import {Button} from 'semantic-ui-react'


function Login ({setCurrentUser}){
    const navigate = useNavigate();
    const [showSignup, setShowSignup] = useState(false)

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const { username, password } = formData

    function handleLoginChange(event){
        const name = event.target.name;
        let value = event.target.value

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleLoginSubmit(event){
        event.preventDefault()
        const user = {
            username,
            password
        }
        fetch('/login', {
            method:'POST',
            // mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(user => {
                    setCurrentUser(user)
                    navigate('/')
            })
         } else {
            alert('Invalid username or password.')
         }
        }) 
}
    function toggleShowSignup(){
        setShowSignup(!showSignup)
    }

    return (
        <div className='loginPage'>
            <div className='loginHeader'>
                
            </div>
            <div className='loginContent'>
                <div className='loginForm'>
                <form class='ui form' onSubmit={handleLoginSubmit}>
                    <div class='field'>
                    <label style={{color: 'white'}}>Username: </label>
                    <input
                        type='text'
                        name='username'
                        onChange={handleLoginChange}
                        value={formData.username}
                        placeholder='username'
                    />
                    </div>
                    <div class='field'>
                    <label style={{color: 'white'}}>Password: </label>
                    <input
                        type='text'
                        name='password'
                        onChange={handleLoginChange}
                        value={formData.password}
                        placeholder='password'
                    />
                    </div>
                    <button class='ui button' type='submit'>Login</button>
                </form>
                </div>
                <br />
                <div className='loginForm'>
                <h3 style={{color: 'white'}}>Don't have an account?</h3>
                <Button onClick={toggleShowSignup}>Sign Up!</Button>
                {showSignup ? 
                <div className='signupForm'>
                <Signup setCurrentUser={setCurrentUser}/>
                </div> : null}
                </div>
            </div>
        </div>
    )
}

export default Login;