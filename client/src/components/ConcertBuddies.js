import React, { useState } from "react";
import BuddyTimeline from "./BuddyTimeline";


function ConcertBuddies({allUsers, allConcerts, allFestivals}){

    const [buddyFilter, setBuddyFilter] = useState(0)

    const buddies = allUsers.map((user) => (
            <option value={user.id}>{user.username}</option>
        ))


    const buddyConcerts = allConcerts.filter(
        (concert) => concert.user.id === parseInt(buddyFilter)
    );

    const buddyFestivals = allFestivals.filter(
        (festival) => festival.user.id === parseInt(buddyFilter)
    );

    const concertObjects = buddyConcerts.map((concert) => ({
        object_name: concert.band_name,
        object_image: concert.concert_image,
        object_date: concert.date,
        object_where: concert.venue.venue_name,
        object_rating: concert.rating
    }))

    const festivalObjects = buddyFestivals.map((festival) => ({
        object_name: festival.festival_name,
        object_image: festival.festival_image,
        object_date: festival.start_date,
        object_where: festival.city,
        object_rating: festival.rating
    }))


    function handleBuddy(event){
        setBuddyFilter(event.target.value)
    }

    return(
        <div>
            <br />
            <div>
            <strong style={{fontSize: 'large'}}>Choose Your Concert Buddy: </strong>
            <select type='select-one' class='ui scrolling dropdown' onChange={handleBuddy} value={buddyFilter}>
                <option value='0'></option>
                {buddies}
            </select>
            </div>
            <br />
            <div>
                <BuddyTimeline concertObjects={concertObjects} festivalObjects={festivalObjects} />
            </div>
        </div>
    )
}

export default ConcertBuddies;