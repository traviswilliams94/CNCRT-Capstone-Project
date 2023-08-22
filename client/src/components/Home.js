import React from "react";
import {useState, useEffect} from 'react';
import TimelineCard from "./TimelineCard";

function Home({ currentUser, userConcerts }){

    const timelineConcerts = (userConcerts.slice(0).sort((a, b) => a.date.localeCompare(b.date))).reverse()

    const evenTimelineConcerts = timelineConcerts.filter((a, i) => i % 2 === 0)
    const oddTimelineConcerts = timelineConcerts.filter((a, i) => i % 2 !== 0)

    const leftTimeline = evenTimelineConcerts.map((concert) => (
        <div className="container left">
            <TimelineCard key={concert.id} concert={concert} />
        </div>
    ))

    const rightTimeline = oddTimelineConcerts.map((concert) => (
        <div className="container right">
            <TimelineCard key={concert.id} concert={concert} />
            </div>
    ))

    return (
        <div className="home">
            <div>
                <h1>Welcome to CNCRT, {currentUser.name}!</h1>
                <h3>Your Timeline: </h3>
            </div>
            <div className="timeline">
            
                {leftTimeline}
         
            
                {rightTimeline}
            </div>
        </div>
    )
}

export default Home;