import React from "react";
import VenueCard from "./VenueCard";

function VenueContainer({orderedVenues}){

    const displayVenues = orderedVenues.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
    ))
    
    return(
        <div>
            {displayVenues}
        </div>
    )

}

export default VenueContainer;