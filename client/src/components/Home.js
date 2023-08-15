import React from "react";
import {useState, useEffect} from 'react';

function Home({ currentUser }){
    return (
        <div>
            <h1>Welcome to the home page, {currentUser.name}!</h1>
        </div>
    )
}

export default Home;