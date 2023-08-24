import React from "react";
import TimelineCard from "./TimelineCard";

function Home({ currentUser, userConcerts, userFestivals }){

    const concertObjects = userConcerts.map((concert) => ({
        object_name: concert.band_name,
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


    return (
        <div className="home">
            <div>
                <br />
                <h1>Welcome to your CNCRT Timeline, {currentUser.name}!</h1>
                <br />
            </div>
            <div className="timeline">
                {timelineDisplay}
            </div>
        </div>
    )
}

export default Home;