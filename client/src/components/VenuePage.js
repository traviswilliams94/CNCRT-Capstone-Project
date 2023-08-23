import React, { useEffect, useState } from "react";
import VenueContainer from "./VenueContainer";
import AddVenueForm from "./AddVenueForm";
import { allVenuesAtom } from "../lib/atoms";
import { useRecoilValue } from "recoil";

function VenuePage(){
    const [showVenueForm, setShowVenueForm] = useState(false)

    const allVenues = useRecoilValue(allVenuesAtom)

    const orderedVenues = [...allVenues].sort((venue1, venue2) => {
        return venue1.city.localeCompare(venue2.city) || venue1.venue_name.localeCompare(venue2.venue_name);
    })

    function handleShowVenueForm(){
        setShowVenueForm((showVenueForm) => !showVenueForm)
    }

    return (
        <div>
            <VenueContainer orderedVenues={orderedVenues}/>
            <br />
            {showVenueForm ? <AddVenueForm /> :
            <h3>Don't see your venue?</h3>}
            <button onClick={handleShowVenueForm}>Add a Venue</button>
        </div>
    )

}

export default VenuePage;