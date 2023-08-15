import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Login ({setCurrentUser}){
    const navigate = useNavigate();

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
        .then((res) => res.json())
        .then((user) => {setCurrentUser(user)})
        navigate('/')
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLoginSubmit}>
                <label>Username: </label>
                <input
                    type='text'
                    name='username'
                    onChange={handleLoginChange}
                    value={formData.username}
                    placeholder='username'
                />
                <label>Password: </label>
                <input
                    type='text'
                    name='password'
                    onChange={handleLoginChange}
                    value={formData.password}
                    placeholder='password'
                />
                <button  type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;