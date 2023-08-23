import React, { useEffect, useState } from "react";
import UtilitiesBar from "./UtilitiesBar";
import ConcertContainer from "./ConcertContainer";
import { allVenuesAtom } from "../lib/atoms";
import { useRecoilValue } from "recoil";

function ConcertPage({ userConcerts, currentUser }){
    const [searchState, setSearchState] =  useState('')
    const [filterYear, setFilterYear] = useState("")
    const [venueFilter, setVenueFilter] = useState("")


    const allVenues = useRecoilValue(allVenuesAtom)

    const yearFilterConcerts = userConcerts.filter(
        (concert) => concert.date.includes(filterYear)
    );

    const venueOptions = allVenues.map((venue) => (
        <option value={venue.venue_name}>{venue.venue_name}</option>
    ))

    const fullyFiltered = yearFilterConcerts.filter(
        (concert) => concert.venue.venue_name.includes(venueFilter)
    );

    return (
        <div>
            <UtilitiesBar currentUser={currentUser} searchState={searchState} setSearchState={setSearchState} filterYear={filterYear} setFilterYear={setFilterYear}
            venueOptions={venueOptions} venueFilter={venueFilter} setVenueFilter={setVenueFilter}/>
            <br />
            <ConcertContainer fullyFiltered={fullyFiltered} searchState={searchState}/>
        </div>
    )
}

export default ConcertPage;