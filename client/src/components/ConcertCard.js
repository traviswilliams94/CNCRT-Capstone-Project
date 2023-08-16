import React, { useEffect, useState } from "react";

function ConcertCard({concert}){

    return (
        
        <div>
            <img src={concert.concert_image} />
            <p><strong>{concert.band_name}</strong></p>
            <p>Date: {concert.date}</p>
            <p>Venue: {concert.venue.venue_name}</p>
            <p>Opener: {concert.opener}</p>
            <p>Setlist: {concert.setlist_link}</p>
            <p>Rating: {concert.rating}</p>
            <p>Comments: {concert.comments}</p>
        </div>
    )
}

export default ConcertCard;