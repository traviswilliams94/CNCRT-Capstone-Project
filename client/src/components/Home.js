import React, {useState} from "react";
import TimelineCard from "./TimelineCard";
import { Button } from 'semantic-ui-react';

function Home({ currentUser, userConcerts, userFestivals }){

    const [sortBy, setSortBy] = useState(false)

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

    const timelineFavorites = allTimeline.sort((a, b) => (b.object_rating - a.object_rating))

    const favoritesDisplay = timelineFavorites.map((object, i) => {
        if(i % 2 === 0){
            return  <div className="container left"><TimelineCard key={object.object_name} object={object} /></div>;
        }
        else {
            return <div className="container right"><TimelineCard key={object.object_name} object={object} /></div>;
        }
    })

    function switchSort(){
        setSortBy(!sortBy)
    }

    return (
        <div className="home">
            <div>
                <br />
                <h1>Welcome to your CNCRT Timeline, {currentUser.name}!</h1>
                <br />
                {sortBy ?
                <Button color='red' onClick={switchSort}>Show Timeline</Button>
                : <Button color='black' onClick={switchSort}>Show Favorites</Button>}
            </div>
            <br />
            <div className="timeline">
                {sortBy ? 
                favoritesDisplay
                : timelineDisplay
                }
            </div>
        </div>
    )
}

export default Home;