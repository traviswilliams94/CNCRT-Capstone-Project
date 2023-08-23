import React from "react";
import {useState} from 'react';
import TimelineCard from "./TimelineCard";

function Home({ currentUser, userConcerts, userFestivals }){

    const concertObjects = userConcerts.map((concert) => ({
        object_name: concert.concert_name,
        object_image: concert.concert_image,
        object_date: concert.date,
        object_where: concert.venue.venue_name,
        object_rating: concert.rating
    }))

    const festivalObjects = userFestivals.map((festival) => ({
        object_name: festival.festival_name,
        object_image: festival.festival_image,
        object_date: festival.start_date,
        object_where: festival.city,
        object_rating: festival.rating
    }))

    const allTimeline = [...concertObjects, ...festivalObjects]

    const timelineConcerts = allTimeline.sort((a, b) => new Date(...a.object_date.split('/').reverse()) - new Date(...b.object_date.split('/').reverse()));

    const timelineDisplay = timelineConcerts.map((object, i) => {
        if(i % 2 === 0){
            return  <div className="container left"><TimelineCard key={object.object_name} object={object} /></div>;
        }
        else {
            return <div className="container right"><TimelineCard key={object.object_name} object={object} /></div>;
        }
    })

    // const evenTimelineConcerts = timelineConcerts.filter((a, i) => i % 2 === 0)
    // const oddTimelineConcerts = timelineConcerts.filter((a, i) => i % 2 !== 0)

    // const leftTimeline = evenTimelineConcerts.map((concert) => (
    //     <div className="container left">
    //         <TimelineCard key={concert.id} concert={concert} />
    //     </div>
    // ))

    // const rightTimeline = oddTimelineConcerts.map((concert) => (
    //     <div className="container right">
    //         <TimelineCard key={concert.id} concert={concert} />
    //         </div>
    // ))

    return (
        <div className="home">
            <div>
                <h1>Welcome to CNCRT, {currentUser.name}!</h1>
                <h3>Your Timeline: </h3>
            </div>
            <div className="timeline">
                {timelineDisplay}
            </div>
        </div>
    )
}

export default Home;