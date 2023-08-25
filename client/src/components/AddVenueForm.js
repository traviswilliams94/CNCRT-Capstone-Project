import React, { useState } from "react";
import {Button} from 'semantic-ui-react';

function AddVenueForm(){
    const [venueData, setVenueData] = useState({
        venue_name: "",
        city: "",
        image: "",
    })

    function handleVenueFormChange(event){
        const name = event.target.name;
        let value = event.target.value

        setVenueData({
            ...venueData,
            [name]: value,
        });
    }

    function handleVenueSubmit(){
        fetch('/venues', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
            },
            body: JSON.stringify(venueData),
        })
        .then((res) => res.json())
        .then((newVenue) => console.log(newVenue))
    }

    return (
        <div className="addConcertForm">
            <form class='ui form' onSubmit={handleVenueSubmit}>
                <div class="field">
                <label style={{fontSize: 'large'}}>Venue Name: </label>
                <input
                    type='text'
                    name='venue_name'
                    onChange={handleVenueFormChange}
                    value={venueData.venue_name}
                    placeholder='Enter venue name'
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>City, State: </label>
                <input
                    type='text'
                    name='city'
                    onChange={handleVenueFormChange}
                    value={venueData.city}
                    placeholder="ex: Denver, CO"
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>Image: </label>
                <input
                    type='text'
                    name='image'
                    onChange={handleVenueFormChange}
                    value={venueData.image}
                    placeholder="Enter image url"
                />
                </div>
                <Button color='blue' class='ui button' type='submit'>Upload New Venue</Button>
            </form>
        </div>
    )

}

export default AddVenueForm;