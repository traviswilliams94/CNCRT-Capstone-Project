import React, { useEffect, useState } from "react";
import UtilitiesBar from "./UtilitiesBar";
import ConcertContainer from "./ConcertContainer";

function ConcertPage({ allConcerts, currentUser }){
    const [searchState, setSearchState] =  useState('')
    const [filterYear, setFilterYear] = useState("")


    const userConcerts = allConcerts.filter(
        (concert) => concert.user.id === currentUser.id
    );

    const yearFilterConcerts = userConcerts.filter(
        (concert) => concert.date.includes(filterYear)
    );

    return (
        <div>
            <UtilitiesBar currentUser={currentUser} searchState={searchState} setSearchState={setSearchState} filterYear={filterYear} setFilterYear={setFilterYear}/>
            <ConcertContainer yearFilterConcerts={yearFilterConcerts} searchState={searchState}/>
        </div>
    )
}

export default ConcertPage;