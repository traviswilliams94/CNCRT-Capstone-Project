import React, { useEffect, useState } from "react";
import ConcertCard from "./ConcertCard";
import ConcertModal from "./ConcertModal";

function ConcertContainer({yearFilterConcerts, searchState}){

    
    const display = yearFilterConcerts.filter(concert => concert.band_name.toLocaleLowerCase().includes(searchState)).map((concert) => (
        <ConcertCard key={concert.id} concert={concert} />
    ))


    return(
        <div className="concertDisplay">
            
            {display}
            
        </div>
    )

}

export default ConcertContainer;