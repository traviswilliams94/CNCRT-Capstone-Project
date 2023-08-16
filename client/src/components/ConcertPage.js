import React, { useEffect, useState } from "react";
import ConcertCard from "./ConcertCard";
import UtilitiesBar from "./UtilitiesBar";
import ConcertContainer from "./ConcertContainer";

function ConcertPage({ allConcerts, currentUser }){
    const [searchState, setSearchState] =  useState('')


    const userConcerts = allConcerts.filter(
        (concert) => concert.user.id === currentUser.id
    );

    return (
        <div>
            <UtilitiesBar currentUser={currentUser} searchState={searchState} setSearchState={setSearchState}/>
            <ConcertContainer userConcerts={userConcerts} searchState={searchState}/>
        </div>
    )
}

export default ConcertPage;