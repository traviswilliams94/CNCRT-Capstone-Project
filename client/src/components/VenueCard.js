import React from "react";

function VenueCard({venue}){

    return (
        <div>
            <img src={venue.image} />
            <p><strong>{venue.venue_name}</strong></p>
            <p>{venue.city}</p>
            <p>ID: {venue.id}</p>
        </div>
    )

}

export default VenueCard;