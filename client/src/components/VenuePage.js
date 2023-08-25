import React, { useState } from "react";
import VenueContainer from "./VenueContainer";
import AddVenueForm from "./AddVenueForm";
import { allVenuesAtom } from "../lib/atoms";
import { useRecoilValue } from "recoil";
import { Button } from 'semantic-ui-react';

function VenuePage(){
    const [showVenueForm, setShowVenueForm] = useState(false)

    const allVenues = useRecoilValue(allVenuesAtom)

    const orderedVenues = [...allVenues].sort((venue1, venue2) => {
        return venue1.city.localeCompare(venue2.city) || venue1.venue_name.localeCompare(venue2.venue_name);
    })

    function handleShowVenueForm(){
        setShowVenueForm(!showVenueForm)
    }

    return (
        <div>
            <br />
            <br />
            <VenueContainer orderedVenues={orderedVenues}/>
            <br />
            {showVenueForm ?
            <div>
                <AddVenueForm />
                <br />
                <Button onClick={handleShowVenueForm}>Close Form</Button>
            </div>
             :
             <div>
            <h3>Don't see your venue?</h3>
            <Button onClick={handleShowVenueForm}>Add a Venue</Button>
            </div>}
        </div>
    )

}

export default VenuePage;